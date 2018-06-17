import * as React from 'react';
import './assets/style.scss';

export default class Form extends React.Component {
  render() {
    return (
      <div className={'form'}>
        <p>Оставь почту</p>
        <div>
          <input />
          <button>Отправить</button>
        </div>
      </div>
    )
  }
}
