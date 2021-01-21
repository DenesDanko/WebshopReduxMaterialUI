import React from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getProducts } from '../actions/webshopActions';
import store from '../store';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
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

    const status = useSelector( state => state.status );

    return (
        <div className={classes.root}>
            { status.loading
                ? <CircularProgress />
                : <h1>{ status.message }</h1>
            }
        </div>
    )
}

export default App;
