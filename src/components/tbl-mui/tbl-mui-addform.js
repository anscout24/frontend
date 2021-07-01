import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import {MUI_TABLE_COLUMN_MAIN, MUI_TABLE_PROPERTY_OPTIONS} from "./tbl-mui-cfg";
import * as routes from "../../store/routes/routes";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from "react-redux";
import {mapDispatch} from "../../store/dispatches/mapDispatch";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            // width: "100%",
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        pink: {
            color: theme.palette.getContrastText(pink[500]),
            backgroundColor: pink[500],
        },
        green: {
            color: '#fff',
            backgroundColor: green[500],
        },
        inputfields: {
            width: "100%"
        }

    }),
);


const MuiAddForm = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [propertyType, setPropertyType] = React.useState(MUI_TABLE_PROPERTY_OPTIONS[0]);
    const [property, setProperty] = React.useState({});

    const handleChangePropertyType = (event) => {
        setPropertyType(event.target.value);
    };

    const handleChangeProperty = (event) => {
        let newValue = {}
        newValue[event.target.id] = event.target.value
        setProperty({...property,...newValue});
    };

    const handleClickOpen = () => {setOpen(true)};
    const handleClose = (event) => {
        event.preventDefault()
        setOpen(false)
    };


    const onAdd = (event) => {
        event.preventDefault()
        setOpen(false)
        let payload = {...property, realEstateType: propertyType }
        props.onPostTo_API(routes.POST_ROUTE,payload)

    };


    const createInputFields = () => {
        let fields = [];

        MUI_TABLE_COLUMN_MAIN.map(
            col => {

                switch (col.inputForm){

                    case "standard":

                        fields.push(
                            <TextField
                                key={col.field}
                                autoFocus
                                margin="dense"
                                id={col.field}
                                label={col.label}
                                fullWidth
                                // onSubmit={handleChangeProperty}
                                onChange={handleChangeProperty}
                            />
                        )
                        break;
                    case "property":
                        fields.push(
                            <TextField
                                key={col.field}
                                id={col.field}
                                select
                                label="Select"
                                value={propertyType}
                                // onSubmit={handleChangePropertyType}
                                onChange={handleChangePropertyType}
                                className={classes.inputfields}
                                // helperText="Please select prop"
                            >
                                {MUI_TABLE_PROPERTY_OPTIONS.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )
                        break;
                    default:
                        break;
                }
            }
        )

        return fields

    }



    return (
        <>
            <Button className={classes.root}
                 onClick={handleClickOpen}
            >
                <Avatar>
                    <AddIcon/>
                </Avatar>
            </Button>


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Property</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Fill out the fields below to add new property.
                    </DialogContentText>
                    {createInputFields()}
                </DialogContent>
                <DialogActions>

                    <Button onClick={onAdd} color="primary">
                        Add Entry
                    </Button>

                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>



        </>

    )
}

const mapStateToProps = state => {
    return {
        BACKEND_STATUS: state.main.backendStatus,

    };
}



export default connect(mapStateToProps,mapDispatch)(MuiAddForm);
