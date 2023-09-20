
import axios from "axios";

//const API_URL = "http://localhost:5555/"
const API_URL = "https://geochat-efn9.onrender.com/"


class AuthService {


  async mail(email: string, name: string, message: string) {
    const response = await axios.post(API_URL + "api/v2/users/api/user/mail", {
      email,
      name,
      message
    });
    console.log(response);
    //localStorage.setItem('user', JSON.stringify(response));
    return response.data;
  }

  async login(email: string, pasword: string) {
    const response = await axios
      .post(API_URL + "api/v2/users/login", {
        email,
        pasword
      });
    console.log("Aca Yego La respuesta del login data:" + response.data+"   status:",response.status);
    return response;

  }


  logout() {
    localStorage.removeItem("user");
  }


  async register(username: string, email: string, pasword: string) {
    const response = await axios.post(API_URL + "api/v2/users/", {
      username,
      email,
      pasword
    });
    //console.log("Aca Yego La respuesta del register data : " + response.data + "    status:  "+ response.status);
    return response.data;
  }


  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }

}
export default new AuthService();