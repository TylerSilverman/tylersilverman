import axios from "axios";

const BASEURL = "https://zillow-com1.p.rapidapi.com/";

const apiLocation = {
    getUsers: function() {
    return axios.get(BASEURL);
    
  },
};

export default apiLocation;