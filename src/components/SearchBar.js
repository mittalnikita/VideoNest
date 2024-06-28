import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

import React from 'react'

const Searchbar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  }

  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
        borderRadius : 20,
        border : '1px solid #e3e3e3',
        px : {sm: 4, md : 2},
        boxShadow : 'none',
        mr : { sm : 3 }
    }}
    >
        < input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{ p : '10px', color : 'red'}}>
            < Search />
        </IconButton>
    </Paper>
  )
}

export default Searchbar