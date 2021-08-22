import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async(sw,ne) =>{
    try{

        const {data:{data}} = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': '07a00067e2msh82bbff171a1f95fp15a3aejsn6a8a37e762de',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data

    }catch(error){
        console.log(error)

    }
}