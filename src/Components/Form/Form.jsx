import * as React from 'react';
import './assets/style.scss';
import {connect} from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      valid: false
    };
  }

  emailChange(value) {
    this.setState({email: value});
    this.emailValidation();
  }

  emailValidation() {
    const mask = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    this.setState({valid: mask.test(String(this.state.email).toLowerCase())});
  }

  render() {
    return (
      <div className={'form'}>
        <p className={'email'}><span>Оставь почту</span></p>
        <div>
          <input onInput={e => this.emailChange(e.target.value)} />
          <button className={this.state.valid ? 'buttonEnabled' : 'buttonDisabled'}>
            Отправить
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    email: state.email
  }),
  dispatch => ({
    addEmail: (email) => dispatch({type: 'ADD_EMAIL', payload: {email}})
  })
)(Form)
