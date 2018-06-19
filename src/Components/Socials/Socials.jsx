import * as React from 'react';
import fb from './assets/fb.svg';
import vk from './assets/vk.svg';
import twitter from './assets/twitter.svg';
import ok from './assets/ok.svg';
import './assets/style.scss';

export default class Socials extends React.Component {
  render() {
    return (
      <div className={'socials'}>
        <p><span>1.</span>Поделитесь с друзьями</p>
        <div>
          <span className={'link'}
                onClick={() => window.open("https://vk.com/share.php?url=", "popup", "width=600,height=400")}>
            <img src={vk} />
          </span>
          <span className={'link'}
                onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=", "popup", "width=600,height=400")}>
            <img src={fb} />
          </span>
          <span className={'link'}
                onClick={() => window.open("https://twitter.com/home?status=", "popup", "width=600,height=400")}>
            <img src={twitter} />
          </span>
          <span className={'link'}
                onClick={() => window.open("https://connect.ok.ru/offer?url=", "popup", "width=600,height=400")}>
            <img src={ok} />
          </span>
        </div>
      </div>
    )
  }
}