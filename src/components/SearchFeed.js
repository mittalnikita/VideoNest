import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import {  SearchBar, Videos } from './';
import React from 'react'
import { fetchFromAPI } from './utils/fetchFromApi';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
     fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box pb={2} px={17} sx={{ overflowY : 'auto', 
      height : '90vh', flex : 2
     }}>
      <Typography varient='h4'
        fontWeight='bold' fontSize={40} mb={2} display={'flex'} justifyContent={'end'} gap={2} sx={{ color : 'white' }}>
        Search Results for -  <span style={{ color : '#F31503' }}>{ searchTerm }</span>
      </Typography>

      <Videos videos={videos} />

    </Box>
  )
}

export default SearchFeed