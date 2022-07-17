import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh !important',
        width: '100vw !important',

        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

    },
    form__container: {
        boxShadow: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); !important',
        padding: '50px',
        width: '300px',
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column'
    },
    form__input: {
        marginBottom: '30px !important'
    },
    signup__link: {
        marginTop: '10px',
        color: '#347EDD',
        textDecoration: 'none',
        "&:hover": {
            textDecoration: 'underline'
        }
    },
    list__container: {
        display: "flex !important",
        flexDirection: 'column',
        width: '100%'
    },
    list__item: {

        backgroundColor: '#fff',
        display: "flex !important",
        justifyContent: 'space-between !important',
        alignItems: 'center',
        fontSize: '18px',
        marginBottom: '10px'

    },
    location__icon: {
        color: '#FA9F00',
        fontSize: '22px !important'
    },
    job__button: {
        color: "#12101c !important",
        backgroundColor: '#f2f4f8 !important',
        display: "flex !important",
        marginLeft: '11px',
        marginTop: '5px',
        padding: '5px',
        borderRadius: '5px',
        fontSize: '14px'

    },
    cash__icon: {
        fontSize: '16px'
    },
    delete__icon: {
        color: 'red',
        display: "inline-block",
        marginLeft: '10px',
        marginTop: '10px',
        "&:hover": {
            color: 'grey',
            cursor: "pointer"
        }
    },
    search__bar: {
        background: "#fff"
    },
    search__icon: {
        position: "absolute",
        right: '10px',
        top: '18px',
        fontSize: '30px'
    },
    nav__link: {
        textDecoration: 'none',
        color: 'black'
    },
    nav__link__active: {
        color: 'red'
    },
    container: {
        height: '100vh !important',
        width: '100vw !important',

        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

    },
    form__container: {
        boxShadow: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); !important',
        padding: '50px',
        width: '300px',
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column'
    },
    form__input: {
        marginBottom: '30px !important'
    },

}));


export default useStyles