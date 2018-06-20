import * as React from 'react';
import './assets/style.scss';
import {connect} from "react-redux";
import propTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.emailChange = this.emailChange.bind(this);

    this.state = {
      email: '',
      valid: false,
      send: false
    };
  }

  sendData() {
    const request = new Request('http://localhost:3000/email', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({userId: this.props.userId, email: this.props.email}),
    });
    fetch(request).then(response => response.json().then(data => {
      console.log('email', data);
    }));
  }

  emailChange(event) {
    this.setState({email: event.target.value}, () => this.emailValidation());
    console.log('emailChange')
  }

  emailValidation() {
    const mask = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({valid: mask.test(String(this.state.email).toLowerCase())}, () => {
      if (this.state.valid) {
        this.props.addEmail(this.state.email)
      }
    });
  }

  handleClick() {
    // this.props.addEmail(this.state.email);
    this.sendData();
    this.setState({send: true});
    console.log('handleClick')
  }

  render() {
    return (
      <div className={`form ${this.state.send && 'done'}`}>
        <p className={'email'}><span>Оставь почту</span></p>
        <div>
          <input disabled={this.props.email !== ''} onInput={this.emailChange} />
          <button className={this.state.valid ? 'buttonEnabled' : 'buttonDisabled'}
                  onClick={() => this.handleClick()}>
            Отправить
          </button>
        </div>
      </div>
    )
  }
}

Form.propTypes = {userId: propTypes.string, email: propTypes.string.isRequired, addEmail: propTypes.func.isRequired};

export default connect(
  state => ({
    email: state.email,
    userId: state.userId
  }),
  dispatch => ({
    addEmail: (email) => dispatch({type: 'ADD_EMAIL', payload: {email}})
  })
)(Form)
