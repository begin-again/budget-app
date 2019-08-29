// higher order component
// regular component which renders another component
// reuse code
// render hijacking
// prop manipulate
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  const template =
    <div>
      <h1>info</h1>
      <p>This info is {props.info}</p>
    </div>;
  return template;
};

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    const template =
      <div>
        {props.isAdmin && <p>This is private info - please do not share</p>}
        <WrappedComponent {...props} />
      </div>;
    return template;
  };
};

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const template =
      <div>
        {!props.isAuth && <p>Please Authenticate</p>}
        {props.isAuth && <WrappedComponent {...props} />}
      </div>;
    return template;
  };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

// ReactDOM.render(<AdminInfo info='amazing' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo info='amazing' />, document.getElementById('app'));
