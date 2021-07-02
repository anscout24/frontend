import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import { MUI_TABLE_PROPERTY_OPTIONS} from "./tbl-mui-cfg";
import * as routes from "../../store/routes/routes";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
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
        },
        sliderDiv: {
            [theme.breakpoints.down('sm')]:{
                width: "60%" ,
                paddingTop:25
            },
            width: "30%" ,
            marginLeft: 50,
            paddingTop:25
        },
        slider: {
            width: "100%",
            paddingTop: 20,
        },
        autocomplete: {
            [theme.breakpoints.down('sm')]:{
                width: "60%" ,

            },
            width: "20%" ,
            marginLeft: 50,
            paddingTop:28
        }
    }),
);


function valuetext(value) {
    return `${value} EUR `;
}

const MuiFilter = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState({
        realEstateType: "",
        rentalPriceMin: 0,
        rentalPriceMax: 5000,
        salesPriceMin: 0,
        salesPriceMax: 999999,
    });

    const getMinMax = (key) => {
        const min = Math.min.apply(Math, props.LISTINGS_DATA.map(function(e) {return e[key]; }))
        const max = Math.max.apply(Math, props.LISTINGS_DATA.map(function(e) {return e[key]; }))
        return [min, max]
    }

    const [valueSliderRentalPrice, setValueSliderRentalPrice] = React.useState(()=> getMinMax('rentalPrice'));
    const [initSliderRentalPrice] = React.useState(()=> getMinMax('rentalPrice'));
    const [valueSliderSalesPrice, setValueSliderSalesPrice] = React.useState(()=> getMinMax('salesPrice'));
    const [initvalueSliderSalesPrice] = React.useState(()=> getMinMax('salesPrice'));

    const conditions = [
        parseInt(value.rentalPriceMax) > parseInt(value.rentalPriceMin),
        parseInt(value.salesPriceMax) > parseInt(value.salesPriceMin),
    ]

    React.useEffect(()=> {
        if (!conditions.includes(false)){
            props.onFetchFrom_API(routes.FETCH_FILTERED_DATA_ROUTE, value)
        }
    },[value])

    const defaultProps = {
        options: MUI_TABLE_PROPERTY_OPTIONS,
        getOptionLabel: (option) => option
    };

    const handleChange = (event, newValue) => {
        setValueSliderRentalPrice(newValue)
    };
    const handleChangeSalesSlider = (event, newValue) => {
        setValueSliderSalesPrice(newValue)
    };

    return (
        <>
            <div className={classes.autocomplete} >
                <Autocomplete
                    {...defaultProps}
                    key="realEstateType"
                    id="EstateType"
                    value={value['realEstateType']}
                    autoComplete
                    onChange={(event,newValue) => {
                        setValue(prevState => ({...prevState,"realEstateType": newValue}))
                    }}
                    renderInput={(params) => <TextField {...params} label="Select Property Type"  />}
                />
            </div>
            {/*{createTextfield()}*/}

            <div className={classes.sliderDiv }>
                <Typography id="range-slider" gutterBottom>
                    Range for Rent Price EUR min: {valueSliderRentalPrice[0]} to max: {valueSliderRentalPrice[1]}
                </Typography>
                <Slider
                    className={classes.slider}
                    defaultValue={0}
                    value={valueSliderRentalPrice}
                    getAriaValueText={valuetext}
                    onChange={handleChange}
                    min={initSliderRentalPrice[0]}
                    max={initSliderRentalPrice[1]}
                    step={1}
                    onChangeCommitted = {(event,number) => {
                        setValue(prevState =>({
                            ...prevState,
                            rentalPriceMin: number[0],
                            rentalPriceMax: number[1]
                        }))
                    }}
                />


            </div>

            <div className={classes.sliderDiv}>
                <Typography id="range-slider" gutterBottom>
                    Range for Sales Price EUR min: {valueSliderSalesPrice[0]} to max: {valueSliderSalesPrice[1]}
                </Typography>
                <Slider
                    className={classes.slider}
                    defaultValue={0}
                    value={valueSliderSalesPrice}
                    getAriaValueText={valuetext}
                    onChange={handleChangeSalesSlider}
                    min={initvalueSliderSalesPrice[0]}
                    max={initvalueSliderSalesPrice[1]}
                    step={1}
                    onChangeCommitted = {(event,number) => {
                        setValue(prevState =>({
                            ...prevState,
                            salesPriceMin: number[0],
                            salesPriceMax: number[1]
                        }))
                    }}
                />


            </div>

        </>

    )
}

const mapStateToProps = state => {
    return {
        LISTINGS_DATA: state.main.listings,
    };
}



export default connect(mapStateToProps,mapDispatch)(MuiFilter);
