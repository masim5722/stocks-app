import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: 'transparent !important',
        width: '100vw'
    },
    toolBar: {
        backgroundColor: '#00508F',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
        minHeight: '55px !important'
    },
    iconColor:{
        color: '#fff'
    },
    marginTop2:{
        marginTop: "4rem"
    }
}))
