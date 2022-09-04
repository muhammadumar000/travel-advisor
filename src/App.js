import Header from "./Components/Header/Header";
import List from "./Components/List/List";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";  
import Map from "./Components/Map/Map";
import {CssBaseline, Grid} from '@mui/material';
import {getPlacesData} from './api'
import { useState,useEffect } from "react";

function App() {
  const [places,setPlaces] = useState([]);
  const [coordinates,setCoordinates] = useState({});
  const [bounds,setBounds] = useState({});
  const [type,setType] = useState('restaurants');
  const [rating,setRating] = useState(0);
  const [isLoading,setIsLoading] = useState(false);

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) =>{
      setCoordinates({lat:latitude,lng:longitude});
    })
  },[])

  useEffect(()=>{
     setIsLoading(true);
    getPlacesData(bounds.sw,bounds.ne,type).then((data) => {
      setPlaces(data)
      setIsLoading(false);
    })
  },[bounds,coordinates,type])
  return (
    <>
        <CssBaseline>
          <Header setCoordinates={setCoordinates} />
          <Grid container spacing={3} sx={{width:'100%'}}>
            <Grid item xs={12} md={4}>
             <List 
             places = {places}
             type = {type}
             setType = {setType}
             rating = {rating}
             setRating = {setRating}
             isLoading = {isLoading}
              />
            </Grid>
            <Grid item xs={12} md={8}>
             <Map 
               setCoordinates = {setCoordinates}
               setBounds = {setBounds}
               coordinates = {coordinates}
               places = {places}
               rating = {rating}
             />
            </Grid>
            
          </Grid>
        </CssBaseline>
    </>
  );
}

export default App;
