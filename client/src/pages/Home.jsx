import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from '@mui/material'
import './Home.css';
import img from '../assets/img.png';

const websiteTitles = ["Writing Articles", "Finding Hashtags", "Designing Templates"]
const features = [
  {
    title: "feature1",
    description: "feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1"
  },
  {
    title: "feature2",
    description: "feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1"
  },
  {
    title: "feature3",
    description: "feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1"
  },
  {
    title: "feature3",
    description: "feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1"
  },
  {
    title: "feature3",
    description: "feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1"
  },
  {
    title: "feature3",
    description: "feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1 feature 1"
  },
]
const Home = () => {
  const [txtIndex, setTxtIndex] = useState(0);
  useEffect(() => {
    var interval = setInterval(() => {
      setTxtIndex(old => (old + 1) % websiteTitles.length)
      console.log(websiteTitles[txtIndex])
    }, 1000);
    return(() => clearInterval(interval))
  })
  return (
    <Box>
      <Box>
        <Paper sx={{ backgroundColor: '#5555D0'}} elevation={4}>
          <Box className='navbar' p={2}>
            <Typography ml={8} variant="h4" color='white' fontWeight='bold'>Logo</Typography>
            <Box display='flex' gap='24px'>
              <Button variant='outlined'>explore</Button>
              <Button variant='outlined'>pricing</Button>
              <Button variant='outlined'>login</Button>
            </Box>
            

          </Box>
        </Paper>
        <Box mt='10vh' display='flex' flexDirection='row' justifyContent='space-around' p={4}>
          <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Typography variant="h3" color='#5755D2' textAlign='center'>Your AI Companion for</Typography>
            <Typography  variant="h3" color='white' textAlign='center' sx={{
      backgroundcolor: "primary",
      backgroundImage: `linear-gradient(45deg, #5514B4, #F662D8)`,
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>{websiteTitles[txtIndex]}.</Typography>
            <Typography color='#5755D2' variant='h5' textAlign='center' mt={2}>Find creative ideas and helpful tools <br /> for your next video or article...</Typography>
          </Box>
        <Box sx={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} height='70vh' width='50%'></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
