import React from 'react';

const EditExpense = (props) => {
  console.log(props);
  const template =
    <div>
        Editing the expense with id of {props.match.params.id}
    </div>
        ;
  return template;
};

export default EditExpense;
