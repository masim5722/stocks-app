import React from "react"
import {Divider, Grid, Typography} from "@material-ui/core";

const StockView = () => {
  return (
    <Grid container>
        <Grid lg={12}>
            <Typography variant={"h4"} weight="medium">
                Stocks
            </Typography>
            <Divider />
        </Grid>

        <Grid lg={12}>
            <Typography variant={"subtitle1"} weight="low" >
                Stock graph will appear here
            </Typography>
        </Grid>
    </Grid>
  );
}

export default StockView
