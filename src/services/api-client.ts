import axios from "axios";
 
export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params:{
       key: 'cc5b25313c434f16b51118048515667e'

    }
});