import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }
    }
));

export const LoadingPage = () => {
    const classes = useStyles();

    return (<div className={classes.center}>
                <CircularProgress />
            </div>)
};
