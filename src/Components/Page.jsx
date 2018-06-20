import * as React from 'react';
import './assets/style.scss';
import background from './assets/background.svg';
import logo from './assets/logo.svg';
import Socials from "./Socials/Socials";
import Form from "./Form/Form";
import propTypes from "prop-types";
import {connect} from "react-redux";

class Page extends React.Component {

  componentDidMount() {
    const request = new Request('http://localhost:3000/userId', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({userId: this.props.userId}),
    });

    fetch(request).then(response => response.json().then(data => {
      console.log('fetched', data);
      this.props.updateStore(data);
    }));
  }

  render() {
    return (
      <div className={'main'} style={{backgroundImage: `url(${background})`}}>
        <div className={'logo'}>
          <span>
            <img src={logo} />
          </span>
        </div>
        <div className={'content'}>
          <h1>Чтобы выиграть путешествие</h1>
          <Socials />
          <Form />
        </div>
      </div>
    )
  }
}

Page.propTypes = {userId: propTypes.string, updateStore: propTypes.func.isRequired};

export default connect(
  state => ({
    userId: state.userId
  }),
  dispatch => ({
    updateStore: (data) => dispatch({type: 'ADD_ID', payload: data})
  })
)(Page)