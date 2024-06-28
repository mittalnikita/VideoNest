import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import React from 'react'
import { fetchFromAPI } from './utils/fetchFromApi';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([]);

  useEffect(() => {
     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection : { sx : "column", md : 'row' } }}>
      <Box sx={{ height : { sx : 'auto', md : '92vh' }, borderRight : '1px solid #3d3d3d', px : { sx : 0, md : 2 }  }}>
        <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>

        <Typography 
        className='copyright'
        variant='body2'
        sx={{ mt : 1.5, color : '#fff' }}>
          © 2024 Nikita Mittal
        </Typography>
      </Box>

      <Box p={2} pl={4} pt={0} sx={{ overflowY : 'auto', 
        height : '90vh', flex : 2
       }}>
        <Typography varient='h4'
      fontWeight='bold' fontSize={40} mb={2} sx={{ color : 'white' }}>
          {selectedCategory} <span style={{ color : '#F31503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />

      </Box>

    </Stack>
  )
}

export default Feed