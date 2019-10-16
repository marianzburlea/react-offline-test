import React from 'react';
import { render } from 'react-dom';
import App from './component/app';

document.addEventListener('DOMContentLoaded', () => {
  render((<App />), document.getElementById('reactMountPoint'));
});
