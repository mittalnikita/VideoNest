import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Greet from './Greet';
import SearchBar from './SearchBar'



const Navbar = () =>(
  <Stack 
    direction={'row'} 
    alignItems={'center'} 
    px={3} py={1}
    sx={{position : 'sticky', 
    background : '#000', top : 0, justifyContent : 'space-between'}}>

    <Link
    to={'/'}
    style={{display : 'flex', alignItems : 'center'}}
    >
      <img src='/logo.png' alt='logo' height={90} width={130}></img>

    </Link>
    < Greet />
    < SearchBar />

  </Stack>
);

export default Navbar