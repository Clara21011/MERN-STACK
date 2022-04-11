
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link className={classes.link}to='/'><Typography>HOME</Typography></Link>
                <Link className={classes.link}to='/'><Typography>ABOUT</Typography></Link>
                <Link className={classes.link}to='/'><Typography>CONTACT</Typography></Link>
                <Link className={classes.link}to='/'><Typography>LOGIN</Typography></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header; 