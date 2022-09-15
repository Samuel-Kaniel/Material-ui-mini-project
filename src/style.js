import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0 , 8)
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '20px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer:{
        backgroundColor: '#CAD5E2',
        padding: '50px 0'
    }
}))

export default useStyles;