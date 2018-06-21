import * as React from 'react';
import './assets/style.scss';
import * as backImg from '../assets/background.svg';
import * as finalImg from './assets/finalImg.png';
import * as logo from '../assets/logo.svg';

export default class Final extends React.Component {
  render() {
    return (
      <div style={{background: `url(${finalImg}),url(${backImg})`,
             backgroundRepeat: 'no-repeat, no-repeat',
             backgroundSize: 'cover, cover',
             backgroundPosition: 'center'
           }}
           className={'final'}>
        <div className={'logo'}>
           <span>
             <img src={logo}/>
           </span>
        </div>
        <div className={'finalText'}>
          <h3>Путешествие</h3>
          <h1>близко!</h1>
        </div>
      </div>
    )
  }
}