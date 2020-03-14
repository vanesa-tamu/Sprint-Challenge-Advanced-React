import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Darkbutton from './Components/DarkButton.js'
import { render, cleanup } from "@testing-library/react";
import Player from './Components/Player.js'

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Button correctly', () => {
  render(<Darkbutton />);
});

test('Renders Header', () => {
  const { getByText } = render(<App />);
  getByText(/Soccer Stats!/i);
})


