import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Box, Paper,Rating,Typography,useMediaQuery,UseMediaQuery} from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';


const Map = ({setCoordinates,setBounds,coordinates,places,rating}) => {
const isMobile  = useMediaQuery('(max-width:600px)');
   
  return (
    <Box elevation={6} sx={{height:'90vh',width:'100%',padding:'1rem',borderRadius:'10px'}}>
        <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyAMU8oQeSqZ3i097V--bpEYeLLWSS5N7b8'}}
        defaultCenter={coordinates}
        center = {coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => {
            setCoordinates({lat:e.center.lat,lng:e.center.lng})
            setBounds({ne:e.bounds.ne,sw:e.bounds.sw})
        }}
        onChildClick={''}
        
        >
        {places?.filter(place => (place.rating)>=rating).map(place => (
            <Box
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            sx={{position:'absolute',transform:'translate(-50%,-50%)',zIndex:1}}

            >
            {isMobile?(
              <LocationOn color='primary' fontsize="large" />

            )
            :(
                <Paper  sx={{padding:'10px',display:'flex',justifyContent:'center',flexDirection:'column',width:'10rem',minHeight:'12rem'}} elevation={3}>
                    <Typography variant='h6' align="center">{place.name}</Typography>
                    <img src={place.photo ? place.photo.images.large.url : 'https://thumbs.dreamstime.com/b/osaka-coffee-shop-japan-kyoto-55636299.jpg'} alt={place.name} />
                    <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
            )
        }
            </Box>
        ))}

        </GoogleMapReact>
    </Box>
  )
}

export default Map