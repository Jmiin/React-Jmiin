// import React from 'react';
import ReactDOM from 'react-dom';
// import App2 from './App2';
import PropsTypeDemo from './PropsTypeDemo';
// import NameForm from './NameForm';
// import FlavorForm from './FlavorForm';
// import FormDemo from './FormDemo';
// import HzeroUi from './hzeroUi';
// import Clock from './Clock';
// import App from './App';
// import KeyDemo from './KeyDemo';

//eslint-disable-next-line
// const element = <h1>Hello, world</h1>;

// function tick() {
//   const newLocal = (
//     <div>
//       <h1>Hello , world!</h1>
//       <h2>It is {new Date().toLocaleString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     newLocal,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function App(){
//   return(
//     <div>
//       <Welcome name = "a"></Welcome>
//       <Welcome name = "b"></Welcome>
//       <Welcome name = "c"></Welcome>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App></App>,
//   document.getElementById('root')
// );



/**
 * 
 * <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
          </h2>
    }
   </div>
   该方式和以下的实现是一致的
 */
/* let unreadMessages = [];

React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello!"),
  unreadMessages.length > 0 &&
  React.createElement(
    "h2",
    null,
    "You have ",
    unreadMessages.length,
    " unread messages."
  )
); */
ReactDOM.render(
  // <App />,
  // <HzeroUi />,
  // <FormDemo />,
  // <FlavorForm />,
  // <App2 />,
  <PropsTypeDemo title = "标题"/>,
  document.getElementById('root')
);
