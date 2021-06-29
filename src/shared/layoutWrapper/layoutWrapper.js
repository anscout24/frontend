import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Container = props => <Grid container{...props}/>;
const MainBody = props => <Grid item xs={10} {...props} />;
const Side = props => <Grid item xs={1} {...props} />;

const styles = (props) => ({
    root:{
        flexGrow: 1,
    },
    paper:{
        padding: props.theme.spacing(2),
        textAlign: 'center',
        color: props.theme.palette.text.secondary
    }
});


const WithStylesProps = styles => Component => props => {
    const Comp = withStyles(theme => styles({...props,theme}))(Component);
    return <Comp {...props} />;
};


const BodyWithStylesProps = WithStylesProps(styles) (
    props => (
        <div className={props.classes.root} style={{padding: 20}}>
            <Container spacing={1}>
                <Side>
                    {props.children[0]}
                </Side>
                <MainBody>
                    {props.children[1]}
                </MainBody>
                <Side>
                    {props.children[2]}
                </Side>
            </Container>

        </div>
    )
)


const DefaultContainer = WithStylesProps(styles) (props => (
        <div className={props.classes.root}>
            <Container spacing={1}>
                <Side>
                    <Paper className={props.classes.paper}>DEFAULT: xs=2 </Paper>
                </Side>
                <MainBody>
                    <Paper className={props.classes.paper}>DEFAULT: xs=8 </Paper>
                </MainBody>
                <Side>
                    <Paper className={props.classes.paper}>DEFAULT: xs=2 </Paper>
                </Side>
            </Container>
        </div>
    )
)


const LayoutWrapper = (props) => {

    switch (props.ContainerTyp) {

        case("Body"):
            return BodyWithStylesProps(props);
        default:
            return DefaultContainer(props);
    }
}

export default LayoutWrapper;