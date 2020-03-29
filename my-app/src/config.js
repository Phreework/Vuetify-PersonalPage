import axios from "axios";
export default {  
    install(Vue)  
    {  
      Vue.prototype.baseUrl = "http://localhost:3000";  

      Vue.prototype.axios =  axios;  

    }  
  }  