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
          <span>
            <img src={vk} />
          </span>
          <span>
            <img src={fb} />
          </span>
          <span>
            <img src={twitter} />
          </span>
          <span>
            <img src={ok} />
          </span>
        </div>
      </div>
    )
  }
}