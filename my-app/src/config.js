import axios from "axios";
import bus from "./bus";
export default {  
    install(Vue)  
    {  
      Vue.prototype.baseUrl = "http://phreesoda.com/api";  
      Vue.prototype.axios =  axios;  
      Vue.prototype.bus =  bus;  
    }  
  }  