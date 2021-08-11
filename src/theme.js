import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            paper: "#171923"
        },
        primary: {
            main: '#21262D',
            contrastText: '#E9E9EA',
        },
    },
})