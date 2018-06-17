import * as React from 'react';
import './assets/style.scss';
import background from './assets/background.svg';
import logo from './assets/logo.svg';
import Socials from "./Socials/Socials";
import Form from "./Form/Form";

export default class Page extends React.Component {
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