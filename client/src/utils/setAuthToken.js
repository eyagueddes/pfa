//fct that takes in a token ,if the token is there it's going to add it to the headers
//if not it's gonne delete it from the headers
import axios from'axios';
const setAuthToken=token=>{
    if (token){
        axios.defaults.headers.common['x-auth-token']=token;
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
        }
}
export default setAuthToken;
