import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './App.css';
import HolidaySnapshot from './components/holidaysnapshot/HolidaySnapshot';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
      textTransform: 'none',
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: '#20C5A0',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <HolidaySnapshot currentBooked={36} currentRemaining={41} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
