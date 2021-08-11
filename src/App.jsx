import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { slide as Menu } from "react-burger-menu";
import { theme } from './theme';
import { MOBILE_SIZE } from './constants';

function App() {
  const useStyles = makeStyles({
    appContainer: {
      minHeight: '100vh',
    }
  });

  const classes = useStyles();
  const isMobile = useMediaQuery(MOBILE_SIZE);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.appContainer} square>
        <Grid container display="column" >
          {isMobile ? (
            <Menu isOpen={!isMobile} width={"15rem"} styles={burgerStyles}>
              <Sidebar />
            </Menu>
          ) : (
            <Grid container item lg={3} direction="column" alignItems="center"   >
              <Grid container item justify="center" alignItems="flex-start" className={classes.appContainer}>
                <div style={{ position: 'fixed' }} >
                  <Sidebar />
                </div>
              </Grid>
            </Grid>
          )}

          <Grid container item lg={9} >
            <Paper elevation={0}>
              <MainContent />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

var burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#FFFFFF'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: '30px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
  },
  bmMorphShape: {
    fill: '#bdc3c7'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: 0
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default App;
