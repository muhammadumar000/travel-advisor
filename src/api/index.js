import axios from 'axios';



export const getPlacesData = async(sw,ne,type) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng
              },
              headers: {
                'X-RapidAPI-Key': 'e538a949f4mshb7b566383dcf0eep14bdcbjsnbc696cae1988',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        });
        return data;
    } 
    catch(error){
      console.log(error)
    }
}

