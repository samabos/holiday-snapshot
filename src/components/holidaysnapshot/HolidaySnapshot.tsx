import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled, Typography, Box, Card, CardContent, Divider, Button } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './HolidaySnapshot.css';

interface HolidaySnapshotProps {
    currentBooked: number;
    currentRemaining: number;
  }

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {},
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
  },
}));

function HolidaySnapshot(props: HolidaySnapshotProps) {
    // State to keep track of Booked and Remaining values
    const [booked, setBooked] = useState(props.currentBooked ?? 0);
    const [remaining, setRemaining] = useState(props.currentRemaining ??0);

    //checking for invalid props value
    if (!Number.isInteger(booked) || !Number.isInteger(remaining) || booked < 0 || remaining < 0) {
        //todo: Error should be properly logged here 
        return <div>Error: Invalid input values</div>;
    }

    const total = booked + remaining;

    // Function to increase the Booked value
    const increaseBooked = () => {
        if (booked < total) {
        setBooked(booked + 1);
        setRemaining(total - (booked + 1));
        logNewRequest();
        }
    };

    // Function to decrease the Booked value 
    //**Not used for now there is currently no button in the GUI design to remove from already booked 
    //const decreaseBooked = () => {
    //    if (booked > 0) {
    //    setBooked(booked - 1);
    //    setRemaining(total - (booked - 1));
    //    }
    //};

    // Log messages to the console when show detail button is clicked
    const logShowDetail = () => {
        console.log(`Show Detail button clicked - Booked(${booked})`);
    };

    // Log messages to the console when new request button is clicked
    const logNewRequest = () => {
        console.log(`New Request button clicked - Booked: ${booked}, Remaining: ${remaining}`);
    };
  
    // Function to normalise the values for the Progress bar
    const normalise = (value: number): number => ((value - 0) * 100) / (total - 0);


  return (
    <Card variant="outlined" className="HolidaySnapshot">
      <CardContent>
        <Box>
          <Box>
            <Typography gutterBottom component="div" className="Title">
              Holiday Snapshot
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{p: 1, m: 1, mt: 5,}}>
            <Box sx={{ flexGrow: 1, mb: 3 }}>
              <Grid container spacing={3}>
                <Grid xs>
                  <Box sx={{display: 'flex', flexDirection: 'row',}}>
                    <Typography component="span" className="Label">
                      Booked
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs>
                  <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <Typography component="span" className="Label">
                      Remaining
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ width: '100%' }}>
              <BorderLinearProgress variant="determinate" value={normalise(booked)} />
            </Box>
            <Box sx={{ flexGrow: 1, mt: 3 }}>
              <Grid container spacing={3}>
                <Grid xs>
                  <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Typography component="span" className="Number">
                      {booked}
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs>
                  <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <Typography component="span" className="Number">
                      {remaining}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 3 }}>
              <Grid container spacing={3}>
                <Grid xs>
                  <Box sx={{display: 'flex',flexDirection: 'row'}}>
                    <Button variant="outlined" className="Button" onClick={logShowDetail}>
                      Show detail
                    </Button>
                  </Box>
                </Grid>
                <Grid xs>
                  <Box sx={{display: 'flex',flexDirection: 'row-reverse'}}>
                    <Button variant="contained" className="Button Button2" onClick={increaseBooked}>
                      New request
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default HolidaySnapshot;
