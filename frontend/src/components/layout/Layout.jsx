import React from "react"
import {
    BrowserRouter as Router
} from "react-router-dom"

import Header from "./Header"
import AppRoutes from "../../routes/routes"
import {Grid} from "@mui/material";
import Loader from "../loader/Loader";
import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import useStyles from "./styles";

const Layout = () => {
    let classes = useStyles()

    const loaderState = useSelector(state => state.loader)

    return (
        <Router>
            <Loader isLoading={loaderState.isLoading} />
            <Grid className="Layout">
                <Header />
            </Grid>

            <Container maxWidth={"lg"} className={classes.marginTop2}>
                <AppRoutes />
            </Container>
        </Router>
    );
}

export default Layout;
