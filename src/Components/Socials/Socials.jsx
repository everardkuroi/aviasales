import * as React from 'react';
import fb from './assets/fb.svg';
import vk from './assets/vk.svg';
import twitter from './assets/twitter.svg';
import ok from './assets/ok.svg';
import './assets/style.scss';
import {connect} from 'react-redux';

class Socials extends React.Component {

  popUp(link) {
    window.uno = window.open(link, "popup", "width=600,height=400");
    let timer = setInterval(() => {
      if (window.uno.closed) {
        clearInterval(timer);
        console.log('hi');
      }
    }, 500)
  }

  render() {
    return (
      <div className={'socials'}>
        <p className={'share'}><span>Поделись с друзьями</span></p>
        <div className={'links'}>
          <span className={'link'}
                onClick={() => this.popUp("https://vk.com/share.php?url=")}>
            <img src={vk} />
          </span>
          <span className={'link'}
                onClick={() => this.popUp("https://www.facebook.com/sharer/sharer.php?u=")}>
            <img src={fb} />
          </span>
          <span className={'link'}
                onClick={() => this.popUp("https://twitter.com/home?status=")}>
            <img src={twitter} />
          </span>
          <span className={'link'}
                onClick={() => this.popUp("https://connect.ok.ru/offer?url=")}>
            <img src={ok} />
          </span>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    shared: state.shared
  }),
  dispatch => ({
    share: () => dispatch({type: 'ADD_ACTION', payload: {shared: false}})
  })
)(Socials)