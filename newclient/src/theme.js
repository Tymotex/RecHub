import { createMuiTheme } from '@material-ui/core/styles';

export const violetTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#652682",
            dark: "#20162e"   // Dark slate blue 
        },
        secondary: {
            main: "#652682"   // Dark violet
        },
    },
    status: {
        danger: 'orange',
    },
});
