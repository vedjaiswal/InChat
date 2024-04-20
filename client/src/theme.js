import { backdropClasses, createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary : {
            main : "#Cae0fe",
            light : "#d5e6fe",
            dark : "#8d9db2",
            contrastText : "#111"
        },
        secondary : {
            main : "#0e1218",
            light : "#1a1e27",
            dark : "#080b0e",
            contrastText : "#fff"
        },
        text : {
            primary : "#fff",
            secondary : "#fff",
            disabled : "#f2f2f2"
        },
        dark : "#111111",
        light : "#fdf8e1",
        // divider : "#Cae0fe"
        divider : {
            background : "#fff"
        }
    }
})