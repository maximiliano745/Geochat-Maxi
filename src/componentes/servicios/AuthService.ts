import { Print } from "@syncfusion/ej2-react-maps";
import axios, { formToJSON } from "axios";

const API_URL = "http://localhost:8080/"



class AuthService {
  async mail(email: string, name:string, message:string){
    const response = await axios
      .post(API_URL + "api/user/mail", {
        email,
        name,
        message
      });
    console.log(response);
    return response.data;
  }
  
  
  async login(email: string, password: string) {
    const response = await axios
      .post(API_URL + "api/user/login", {
        email,
        password
      });
    console.log(response);
    return response.data;
      
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(firstname: string, email: string, password: string) {
    const response = await axios.post(API_URL + "api/user/signup", {
      firstname,
      email,
      password
    });
    return response.data;
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
  
}

export default new AuthService();