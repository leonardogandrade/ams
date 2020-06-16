import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import amsApi from '../../services/amsApi';
import './index.css'
import io from 'socket.io-client';

var Icon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-10, -90] // point from which the popup should open relative to the iconAnchor
});

export default class AssetMobile extends Component {
  state = {
    docs : [],
    zoom: 5,
    centerMap : [-20.2,-40.2],
    minZoom : 3,
    maxZoom : 18,
  }

  componentDidMount(){
      this.RegisterSocket();
      this.loadData();
  }

  async loadData(){
    const response = await amsApi.get('api/asset');
    const { docs } = response.data;
    this.setState({docs});
  }

  RegisterSocket(){
      const socket = io(process.env.REACT_APP_BACKEND);
      socket.on('assetPost',newAsset =>{
          this.setState({docs : [newAsset,...this.state.docs]});
          this.loadData();
      })
  }

  render() {
    return (
      <Map  className="map" center={this.state.centerMap} zoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {this.state.docs.map((asset,index,array)=>{
          const last = array.length

          if(index < (array.length -1)){
            return (
                <Polyline 
                  key={index}
                  smoothFactor={2}
                  color='#d829d5'
                  positions={[[array[index].coord.lat,array[index].coord.lon],[array[index +1].coord.lat,array[index +1].coord.lon]]}>
                  
                  

                </Polyline>
            )
          }else{
            return(
              <Marker
                key={index}
                position={[array[0].coord.lat,array[0].coord.lon]}
                icon={Icon}>
                <Popup key={asset._id}>
                ID: {asset.mac} <br/>
                  Localização: {asset.name} <br/>
                  Status: {asset.status} <br/>
                  Tipo: {asset.type} <br/>
                  Última manutenção: {asset.lastRepair} <br/>
                  Próxima manutenção: {asset.nextRepair} <br/>
                  Temperatura: {asset.temp} <br/>
                  Pressão: {asset.pression} <br/>
                </Popup>
              </Marker>
            )
          }
      })}
      </Map>
    )
  }
}