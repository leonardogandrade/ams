import React, { PureComponent } from 'react';
import amsApi from '../../services/amsApi';
import io from 'socket.io-client';
import config from '../../config/server_config';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];


export default class Example extends PureComponent {

  state = {
    docs : []
  }

  componentDidMount(){
    this.LoadData();
    this.RegisterSocket();
  }

  async RegisterSocket(){
    const socket = io(`${config.webSocketHost}`);
    socket.on('assetPost', newasset =>{
      this.setState({docs : [newasset,...this.state.docs]});
      this.LoadData();
    })
  }

  async LoadData(){
    const response = await amsApi.get('api/asset');
    const { docs } = await response.data;
    this.setState({docs});
  }

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={1000}
        height={318}
        data={this.state.docs}
        margin={{
          top: 10, right: 0, left: 30, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="name" stroke="#82ca9d" />

      </LineChart>
    );
  }
}
