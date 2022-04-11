
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Coding exercise</Typography>
                <Typography variant="h5" className={classes.text}>
                    If you are interested, you can view some of my projects here<br />
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Clara21011" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}

export default About;