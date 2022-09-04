import React from 'react';
import { useState } from 'react';
import {Autocomplete} from '@react-google-maps/api';
import { AppBar, Box, InputBase, Stack, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({setCoordinates}) => {

  const [autocomplete,setAutoComplete] = useState('');

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat,lng})
  }
  return (
    <AppBar position="static">
        <Toolbar>
           <Typography variant="h6" >
              Travel Advisor
            </Typography> 

            <Box display="flex" ml='auto' p={3} sx={{display: {xs:'none',sm:'block'}}}>
                <Typography variant='h6'>
                 Explore New Places
                </Typography>
            </Box>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                
                    <Box display='flex' alignItems='center' p={1} sx={{width:'10rem',height:'2.5rem',backgroundColor:'gray',marginLeft:'60px'}}>
                    <div>
                        <SearchIcon/>
                    </div>
                    <InputBase placeholder='Search..' />

                    </Box>
            </Autocomplete>
        </Toolbar>
    </AppBar>
  )
}

export default Header