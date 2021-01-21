import React from 'react';
import { useEffect } from 'react';
import { getProducts } from '../actions/webshopActions';
import store from '../store';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function App() {
    const classes = useStyles();

    useEffect(() => {
        store.dispatch(getProducts);
    }, []);

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default App;
