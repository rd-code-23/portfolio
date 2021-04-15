import './App.css';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';


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
      // minWidth: '100vw'
    },

    container: {
      // minWidth: '80vw',
      // minHeight: '100vh',
      // maxWidth: '100vw'
    }
  })
  const classes = useStyles();
  return (
    <>

      <ThemeProvider theme={theme}>
        <Paper >
          <Grid container  className={classes.appContainer} wrap="nowrap">
      
            <Grid container item xs={3} direction="column" alignItems="center"   >
              <Grid container item  justify="center" alignItems="center"  className={classes.appContainer}>
                <Paper style={{position:'fixed'}}>
                <Sidebar />
                </Paper>
            
                {/* <Paper  >
                 
                </Paper> */}
              </Grid>
            </Grid>
            
            <Grid item xs={9} >
              <Paper style={{}}>
                <MainContent />
              </Paper>
            </Grid>

          </Grid>

        </Paper>
        {/* <Paper className={classes.appContainer} square>
          <Grid container className={classes.container} wrap="nowrap">
            <Grid container item direction="column" wrap="nowrap">
              <Grid item xs={3} >
                <Paper style={{ position: 'fixed', minWidth: '25vw', maxWidth: '30vw' }}>
                  <Sidebar />
                </Paper>

              </Grid>
              <Grid item xs={9} >
                <Paper style={{}}>
                  <MainContent />
                </Paper>
              </Grid>


            </Grid>
          </Grid>
        </Paper> */}
      </ThemeProvider>
    </>
  );
}

export default App;
