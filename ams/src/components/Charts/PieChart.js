//import React, { PureComponent } from 'react';
//import { PieChart, Pie, Sector } from 'recharts';
import amsApi from '../../services/amsApi';
import io from 'socket.io-client';
import config from '../../config/server_config';

import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Tooltip,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  state = {
    docs : []
  }

  componentDidMount(){
    this.LoadData();
    this.RegisterSocket();
  }

  async LoadData(){
    const response = await amsApi.get('api/asset');
    const { docs } = await response.data;
    this.setState({docs});
  }

  async RegisterSocket(){
    const socket = io(`${config.webSocketHost}`);
    socket.on('assetPost',newasset =>{
      this.setState({docs : [newasset,...this.state.docs]});
      this.LoadData();
    })
  }

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={this.state.docs} cx={200} cy={100} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    );
  }
}