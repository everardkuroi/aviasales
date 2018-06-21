import * as React from 'react';
import fb from './assets/fb.svg';
import vk from './assets/vk.svg';
import twitter from './assets/twitter.svg';
import ok from './assets/ok.svg';
import './assets/style.scss';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

class Socials extends React.Component {

  sendData() {
    const request = new Request('http://localhost:3000/shared', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({userId: this.props.userId}),
    });
    fetch(request)
  }

  popUp(link) {
    window.uno = window.open(link, "popup", "width=600,height=400");
    let timer = setInterval(() => {
      if (window.uno.closed) {
        clearInterval(timer);
        this.props.share();
        this.sendData();
      }
    }, 500)
  }

  render() {
    return (
      <div className={`socials ${this.props.shared && 'done'}`}>
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

Socials.propTypes = {userId: propTypes.string, shared: propTypes.bool, share: propTypes.func};

export default connect(
  state => ({
    shared: state.shared,
    userId: state.userId
  }),
  dispatch => ({
    share: () => dispatch({type: 'ADD_ACTION', payload: {shared: true}})
  })
)(Socials)