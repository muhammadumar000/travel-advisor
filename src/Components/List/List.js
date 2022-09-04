import React, { useState } from 'react'
import { CircularProgress,Grid,Typography,MenuItem,FormControl,Select, Box, InputLabel, styled } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({places,type,setType,rating,setRating,isLoading}) => {
    

 
  return (
    <Box sx={{padding:'25px'}}>
       <Typography mb={2} variant='h5' sx={{fontSize:{xs:'30px',md:'40px'}}}>
        Restaurants, Hotels & Attractions Around You
       </Typography>
       {
         isLoading ?
         <Box display='flex'  alignItems="center"  justifyContent='center' sx={{height:'60vh'}}>
            <CircularProgress size='5rem'  />
         </Box>
         :(
            <>
         <StyledForm >
          <InputLabel sx={{display:'none'}}>Type</InputLabel>
          <Select value={type} onChange={e => setType(e.target.value)} >
             <MenuItem value='restaurants'>Restaurants</MenuItem>
             <MenuItem value='hotels'>Hotel</MenuItem>
             <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
       </StyledForm>
       <StyledForm >
          <InputLabel sx={{display:'none'}}>Type</InputLabel>
          <Select value={rating} onChange={e => setRating(e.target.value)} >
             <MenuItem value={0}>All</MenuItem>
             <MenuItem value={3}>Above 3.0</MenuItem>
             <MenuItem value={4}>Above 4.0</MenuItem>
             <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
       </StyledForm>
        <Grid container spacing={3} sx={{height:'70vh',overflow:'auto'}}>
        {places?.filter(place => Number(place.rating)>=rating).map((place,index) => {
            return(
            <Grid item key={index} xs={12}>
              <PlaceDetails place={place} />
            </Grid>

            )
        })}
        </Grid>
            </>
         )


       }
      
    </Box>
  )
}

export default List;

const StyledForm = styled(FormControl)({
    margin: '10px',
    minWidth: 120,
    marginBottom:'50px'

})