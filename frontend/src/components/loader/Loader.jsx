import React from "react";
import useStyles from './styles'
import {Backdrop, CircularProgress, Grid} from "@material-ui/core";

const Loader = ({isLoading}) => {
    let classes = useStyles()

    return (
        <Backdrop open={isLoading} className={classes.backdrop} >
            <Grid lg={12}>
                <CircularProgress color={"inherit"} />
            </Grid>
        </Backdrop>
    )
}

export default Loader