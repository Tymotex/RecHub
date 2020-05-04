import { createMuiTheme } from '@material-ui/core/styles';
import blueviolet from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: blueviolet,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

export default theme;
