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
      valid: false
    };
  }

  sendData() {
    const request = new Request('http://localhost:3000/email', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({userId: this.props.userId, email: this.props.email}),
    });
    fetch(request)
  }

  emailChange(event) {
    this.setState({email: event.target.value}, () => this.emailValidation());
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
    this.sendData();
    this.props.send();
  }

  render() {
    return (
      <div className={`form ${this.props.sent && 'done'}`}>
        <p className={'email'}><span>Оставь почту</span></p>
        <div>
          <input disabled={this.props.sent} onInput={this.emailChange} defaultValue={this.props.email} />
          <button className={this.state.valid ? 'buttonEnabled' : 'buttonDisabled'}
                  onClick={() => this.handleClick()}>
            Отправить
          </button>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  userId: propTypes.string,
  email: propTypes.string,
  sent: propTypes.bool.isRequired,
  addEmail: propTypes.func.isRequired,
  send: propTypes.func.isRequired
};

export default connect(
  state => ({
    email: state.email,
    userId: state.userId,
    sent: state.sent
  }),
  dispatch => ({
    addEmail: (email) => dispatch({type: 'ADD_EMAIL', payload: {email}}),
    send: () => dispatch({type: 'ADD_SENT', payload: {sent: true}})
  })
)(Form)
