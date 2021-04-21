import './App.css';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TopBar from './components/TopBar'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: "#000000"
    }
  },
})

function App() {

  const useStyles = makeStyles({
    appContainer: {
      minHeight: '100vh',
    }
  });

  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:1279px)');

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.appContainer} square>
        {mobile ?
          (
            <>
              <TopBar />
              <MainContent />
            </>
          ) :
          (
            <>
              <Grid container display="column" >
                <Grid container item lg={3} direction="column" alignItems="center"   >
                  <Grid container item justify="center" alignItems="flex-start" className={classes.appContainer}>
                    <div style={{ position: 'fixed' }}>
                      <Sidebar />
                    </div>
                  </Grid>
                </Grid>

                <Grid container item lg={9} >
                  <Paper>
                    <MainContent />
                  </Paper>
                </Grid>
              </Grid>
            </>
          )
        }
      </Paper>
    </ThemeProvider>
  );
}

export default App;
