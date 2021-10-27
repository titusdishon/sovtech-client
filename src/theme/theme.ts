import { createTheme } from '@mui/material/styles';
import {red} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#D84465',
            dark: '#D84465',
            light: '#FDF5F7',
        },
        secondary: {
            main: '#0F103A',
            dark: '#0F103A',
            light: '#EDEDF0',
        },
        error: {
            main: '#F1A40F',
            light: '#f1a40f21',
        },
        warning: {
            main: red.A400,
            light: red[100],
        },
        success: {
            main: '#41A15E',
            light: '#41a15e14',
        },
        info: {
            main: '#1A1D3F',
            light: '#0c1cce26',
            dark: '#76778C',
        },
        background: {
            default: '#fbfbfc',
        },
        text: {
            primary: '#000000E2',
            secondary: '#484A65',
        },
    },
    typography: {
        body1: {
            fontFamily: 'WorkSans Regular',
        },
        body2: {
            fontFamily: 'Lato Regular',
        },
        subtitle1: {
            fontFamily: 'Sarabun Regular',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shape: {
        borderRadius: 8,
    },
    zIndex: {
        modal: 2000,
        tooltip: 2000,
    },
});

export default theme;
