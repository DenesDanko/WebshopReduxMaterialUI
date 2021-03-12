import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import { useSelector, useDispatch  } from 'react-redux';


const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 100
    },
    drawerPaper: {
        width: drawerWidth,
        paddingTop: 82
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(2)
    },
}));

const CartDrawer = ({open}) => {
    const classes = useStyles();
    const theme = useTheme();

    const cartArray = useSelector( state => Object.entries(state.cart));
    const productsByID = useSelector( state => state.productsByID);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <List className={classes.root}>
                    { cartArray.map(([key, value]) => {
                        const id = (key.substr(0, key.indexOf('_')));
                        console.log(key.substr(key.indexOf('_')+1)); // Size
                        console.log(value); // qty
                        console.log(productsByID[id].image);
                        return (
                            <ListItem key={ id }>
                                <ListItemAvatar>
                                    <Avatar alt="Product" src={ productsByID[id].image } className={classes.large}/>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>)
                        })
                    }
                </List>
            </Drawer>
        </div>
    );
}

export default CartDrawer;
