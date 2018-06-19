import * as React from 'react';
import './assets/style.scss';

export default class Form extends React.Component {
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
        <p><span>2.</span>Оставь почту</p>
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
