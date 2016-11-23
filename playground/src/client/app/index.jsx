import React from 'react';
import {render} from 'react-dom';
import Chat from './components/Chat.jsx';

const element = <h1>Hello, world</h1>;
const messages = [
  {
    sender: {
      name:"Pedro",
      imgUrl:"http://www.pcgamesn.com/sites/all/themes/pcgamesn/images/icons/default-silo.png"
    },
    content: "Hi"
  },
  {
    sender: {
      name:"John",
      imgUrl:"http://www.pcgamesn.com/sites/all/themes/pcgamesn/images/icons/default-silo.png"
    },
    content: "Ho"
  }
]
render(
  <Chat messages={messages} />,
  document.getElementById("app")
);
