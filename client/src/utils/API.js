import axios from "axios";

const BASEURL = "https://randomuser.me/api?results=50";

const API = {
    getApiRoute: function() {
    return axios.get(BASEURL);
    
  },
};

export default API;

