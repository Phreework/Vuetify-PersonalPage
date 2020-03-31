import axios from "axios";
import bus from "./bus";
export default {  
    install(Vue)  
    {  
      Vue.prototype.baseUrl = "http://localhost:3000";  
      Vue.prototype.axios =  axios;  
      Vue.prototype.bus =  bus;  
    }  
  }  