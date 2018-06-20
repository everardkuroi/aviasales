import * as React from 'react';
import './assets/style.scss';
import {connect} from "react-redux";
import propTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.emailChange = this.emailChange.bind(this);

    this.state = {
      email: "",
      valid: false
    };
  }

  emailChange(event) {
    this.setState({email: event.target.value});
    this.emailValidation();
  }

  emailValidation() {
    const mask = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    this.setState({valid: mask.test(String(this.state.email).toLowerCase())});
  }

  render() {
    return (
      <div className={`form ${this.props.email !== '' && 'done'}`}>
        <p className={'email'}><span>Оставь почту</span></p>
        <div>
          <input disabled={this.props.email !== ''} onInput={this.emailChange} />
          <button className={this.state.valid ? 'buttonEnabled' : 'buttonDisabled'}
                  onClick={() => this.props.addEmail(this.state.email)}>
            Отправить
          </button>
        </div>
      </div>
    )
  }
}

Form.propTypes = {email: propTypes.string.isRequired, addEmail: propTypes.func.isRequired};

export default connect(
  state => ({
    email: state.email
  }),
  dispatch => ({
    addEmail: (email) => dispatch({type: 'ADD_EMAIL', payload: {email}})
  })
)(Form)
