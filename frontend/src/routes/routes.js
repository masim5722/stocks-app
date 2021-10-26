import React from "react"
import {
    Switch,
    Route,
} from "react-router-dom"

import StockContainer from "../components/stocks/StockContainer";

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={StockContainer} />
            <Route exact path="/stocks" component={StockContainer} />
        </Switch>
    )
}

export default AppRoutes