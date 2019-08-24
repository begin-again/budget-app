import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const template =
    <div>
        404! - <Link to='/'>Go Home</Link>
    </div>
        ;
  return template;
};

export default NotFound;
