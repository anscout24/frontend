import React from 'react';
import {mapDispatch} from '../../store/dispatches/mapDispatch';
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MuiAddForm from "./tbl-mui-addform";
import MuiFilter from "./tbl-mui-filter";


let id=0
const getID = () => `i_${id++}`;

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    sumRow: {
        borderBottomColor: "#9bc0ff",
    },
    img: {
      height: 100,
      width: 100
    },
    header: {
        display: "flex",
        [theme.breakpoints.down('sm')]:{
            flexDirection: "column",
        },
        flexDirection: "row",
        // justifyContent: "space-between"
    }
}));

const BasicTable = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const columns = props.data.columns;
    const rows = props.data.data;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Paper className={classes.root}>
            <div className={classes.header}>
                <MuiAddForm/>
                <MuiFilter/>
            </div>

            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead>

                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.label}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={getID()}>
                                    {columns.map((column) => {
                                        const value = row[column.field];

                                        switch (column.field){
                                            case "imageURL":
                                                return (
                                                    <TableCell key={column.label} align={column.align}  >
                                                        {value?<img src={value} alt="new" className={classes.img} />:null}
                                                    </TableCell>
                                                    )
                                            default:
                                                return(
                                                    <TableCell key={column.label} align={column.align}>
                                                        {column.format ? column.format(value) : value}
                                                    </TableCell>
                                                )
                                        }
                                    })}
                                </TableRow>
                            );
                        })}

                    </TableBody>

                </Table>

            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

        </Paper>
    );
}

const mapStateToProps = state => {
    return {
        LISTINGS_DATA: state.main.listings,
    };
}



export default connect(mapStateToProps,mapDispatch)(BasicTable);
