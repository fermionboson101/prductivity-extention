import React from 'react';
import './Popup.css';

import Greetings from '../../containers/Greetings/Greetings';
import Input from '../../containers/Input/Input';
import Switch from '../../containers/Switch/Switch';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings />
        <Switch />
        <Input />
      </header>
    </div>
  );
};

export default Popup;
