import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import useStyles from "./styles";

const Header = () => {
    let classes = useStyles()

    return (
        <AppBar position={"fixed"} className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <IconButton className={classes.iconColor}>
                    <ShowChartIcon />
                </IconButton>

                <Typography variant="h6" weight="medium">
                    <label>Stocks</label>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
