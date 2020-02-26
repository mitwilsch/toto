import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TotoForm from './TotoForm';

const TotoFab = props => {
  const [formActive, setFormActive] = props.formCtrl;
  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  // needs onClick
  return (
    <React.Fragment>
      {formActive ? props.children : null}
      <Fab
        color="secondary"
        style={style}
        onClick={() => setFormActive(!formActive)}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};
export default TotoFab;
