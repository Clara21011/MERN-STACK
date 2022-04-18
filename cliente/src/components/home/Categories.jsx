
import { Button, makeStyles, Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import { categories } from '../../constants/data';
import { Link, useLocation } from 'react-router-dom';
import { URL_MISMATCH_ERR } from 'domexception';
const useStyles = makeStyles({
    write: {
        margin: 20,
        background: '#6495ED',
        color: '#fff',
        width: '85%',
        textDecoration: 'none'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Categories = ({match}) => {
    const classes = useStyles();
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    return (
        <>
            <Link to={'/create/${location.search}'} style={{ textDecoration: 'none'}}>
                <Button variant= "contained" className={classes.write}>Create Blog</Button>
            </Link>

            <Table className={classes.table}>
                <TableHead>
                    <TableCell>
                        <Link to={"/"} className={classes.link}>
                            All Categories
                        </Link>
                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category}`} className={classes.link}>
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;