
import axios from "axios";

const API_URL = "http://localhost:8080/"

class AuthService {

  async createGeofence(latitude: any, longitude: any) {
    const url = 'https://api.radar.io/v1/geofences';

    const payload = {
      description: 'Mi geovalla',
      type: 'circle',


      coordinates: [latitude, longitude],
      radius: 1000,
      tag: 'mi-tag',
    };

    const config = {
      headers: {
        Authorization: 'prj_live_sk_b2b65571e9edc3c8e171c80e846dc7bb28862b2a',
        'Content-Type': 'application/json',
      },
    }

    const response = await axios.post(url, payload, config);
    console.log("aca createGeofence---------------", response)
  }



  async mail(email: string, name: string, message: string) {
    const response = await axios.post(API_URL + "api/user/mail", {
      email,
      name,
      message
    });
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response));
    return response.data;
  }



  async login(email: string, password: string) {
    const response = await axios
      .post(API_URL + "api/user/login", {
        email,
        password
      });
    console.log("Aca Yego La respuesta del AuthService....");
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