import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'dva';
import List from '../../../components/List';

const Child2 = ({ dispatch, child2 }) => {
  function handleDelete(id) {
    dispatch({
      type: 'child2/delete',
      payload: id,
    });
  }
  return (
    <div style={{ padding: '10%' }}>
      <List onDelete={handleDelete} child2={child2} />
      <h1 style={{ marginBottom: 16 }}><Link to="/">Return to index</Link></h1>
    </div>
  )
}

export default connect(({ child2 }) => ({
  child2,
}))(Child2);
