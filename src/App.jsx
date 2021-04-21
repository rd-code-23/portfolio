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
      // minWidth: '100vw'
    },

    container: {
      // minWidth: '80vw',
      // minHeight: '100vh',
      maxWidth: '100vw'
    }
  })
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:1279px)');
  return (
    <>

      <ThemeProvider theme={theme}>

        <Paper className={classes.appContainer} square>

        {/* style={{minWidth:'100vw'}} */}


          {mobile ? (

         <>
        
                <TopBar />
             
              <MainContent />

</>

         
          ) : (
            <>
              <Grid container display="column" >
                <Grid container item xs={false} lg={3} direction="column" alignItems="center"   >
                  <Grid container item justify="center" alignItems="flex-start" className={classes.appContainer}>
                    <div style={{ position: 'fixed' }}>
                      <Sidebar />
                    </div>
                  </Grid>
                </Grid>

                <Grid container item xs={false} lg={9} >
                  <Paper style={{}}>
                    <MainContent />
                  </Paper>
                </Grid>
              </Grid>
            </>

          )}
          {/* <Grid container item xs={false} lg={9}>
                <MainContent />

            </Grid> */}
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
