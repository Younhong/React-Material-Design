import React from 'react';
import logo from './logo.svg';
import './App.css';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';
import { 
  Button, ButtonGroup, Checkbox, FormControlLabel, 
  TextField, makeStyles, ThemeProvider, 
  createMuiTheme, Typography, Container, Paper, 
  Grid, AppBar, Toolbar, IconButton
} from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    }
  },
  palette: {
    primary: {
      main: green[400]
    },
    secondary: {
      main: orange[400]
    }
  }
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>
    Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel 
      control={
        <Checkbox 
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
      label="Testing Checkbox" 
    />
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxwidth="xs">
        <div className="App">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                MUI Theme
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <header className="App-header">
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material Design
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{
                  height: 75, width: '100%'
                }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{
                  height: 75, width: '100%'
                }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{
                  height: 75, width: '100%'
                }} />
              </Grid>
            </Grid>
            <TextField 
              variante="filled"
              color="secondary"
              type="email"
              label="Email"
              placeholder="younhong@daeng.com"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button onClick={()=>alert("hello")}
                startIcon={<SaveIcon />} >
                Save
              </Button>
              <Button onClick={()=>alert("hello")}
                startIcon={<DeleteIcon />} >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
