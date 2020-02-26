import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TotoForm from './TotoForm';

const TotoFab = props => {
  const [overlay, setOverlay] = useState(false);
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
      {overlay ? props.children : null}
      <Fab color="secondary" style={style} onClick={() => setOverlay(!overlay)}>
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};
export default TotoFab;
