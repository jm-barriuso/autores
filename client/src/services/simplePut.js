import axios from 'axios';

export async function simplePut (url,object) {
    try{
        const apiResponse= await axios.put(url,object);
        return apiResponse
    }catch(error){
        return {error:`se ha producido un error: ${error}`}
    }
}