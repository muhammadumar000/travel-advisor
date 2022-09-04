import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationIcon from '@mui/icons-material/LocationOn'

const PlaceDetails = ({place}) => {
  return (
    
    <Card elevation={6}>
      <CardMedia
       sx={{height:350}}
       image={place.photo ? place.photo.images.large.url : 'https://thumbs.dreamstime.com/b/osaka-coffee-shop-japan-kyoto-55636299.jpg'}
       title={place.name}
       loading='lazy'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {place.name}
        </Typography>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Rating value={Number(place.rating)} readOnly />
         <Typography variant="subtitle1">out of {place.num_reviews} Reviews</Typography>
        </Box>

        <Box mt={2} display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='subtitle1'>Price</Typography>
            <Typography variant='subtitle1'>{place.price}</Typography>
        </Box>
        <Box  display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography variant='subtitle1'>{place.ranking}</Typography>
        </Box>
         {
            place?.awards?.map((award) => (
             

                <Box my={1} display='flex' alignItems='center' justifyContent='space-between'>
                   <img src={award.images.small} alt={award.display_name} />
                   <Typography variant='subtitle2'>{award.display_name}</Typography>
                </Box>
             ))
         }
         {
            place?.cuisine?.map(({name}) => (
                <Chip  sx={{margin: '20px 5px 5px 0'}} key={name} label={name} size= 'medium' />
            ))
         }
         {
            place?.phone && (
                <Typography mt={2} sx={{display:'flex',justifyContent:'space-between'}}  gutterBottom variant='subtitle1'>
                    <PhoneIcon />
                    {place.phone}
                </Typography>

            )
         }
         {
            place?.address && (
                <Typography mt={2} sx={{display:'flex',justifyContent:'space-between'}} gutterBottom variant='subtitle1'>
                    <LocationIcon />
                    {place.address}
                </Typography>

            )
         }
         <CardActions>
            <Button size="small" color="primary" onClick={() => window.open(place.web_url,'_blank')}>
                Trip Advisor
            </Button>
            <Button size="small" color="primary" onClick={() => window.open(place.website,'_blank')}>
                Website
            </Button>
         </CardActions>
      </CardContent>

    </Card>
  )
}

export default PlaceDetails