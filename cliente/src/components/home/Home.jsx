
import { Grid } from '@material-ui/core';
// components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {
    return (
        <>
            <Banner/>
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories/>
                </Grid>
                <Grid item container={10} xs={12} sm={10}>
                    <Posts/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home; 