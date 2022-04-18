

import { makeStyles, Box , Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex', //centered
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child' : {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child' : {
            fontSize: 20,
            background: '#FFFFFF'
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>Coding Exercise</Typography>
            </Box>
        </>
    )
}

export default Banner; 