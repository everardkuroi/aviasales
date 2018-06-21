import * as React from 'react';
import './assets/style.scss';
import * as backImg from '../assets/background.svg';

export default class Final extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${backImg})`}} 
           className={'final'}>

      </div>
    )
  }
}