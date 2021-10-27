import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#555',
        background: '#ffffffcf',
        textAlign: 'center'
    },
    mbt2:{
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    mr2:{
        marginRight: '2rem',
    },
    textAlignRight:{
        textAlign: 'right'
    },
    filterButton:{
        backgroundColor: '#40abfc',
        color: 'white',
        marginTop: '0.5rem',
        '&:hover' :{
            backgroundColor: '#1e76b9 !important',
        }
    },
    sortField:{
        minWidth: '150px',
        textAlign: 'left'
    }
}))
