import React from 'react';
import { Link } from 'react-router-dom';

export default ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {description}
      </h3>
    </Link>
    <p>{amount} &raquo; {createdAt}</p>
  </div>
);
