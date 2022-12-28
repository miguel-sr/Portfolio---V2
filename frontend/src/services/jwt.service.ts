import VueJwtDecode from "vue-jwt-decode";

export interface ITokenParams {
  id: string;
  name: string;
  credentials: string;
}

class JwtService {
  decode(): ITokenParams {
    try {
      if (!localStorage.getItem("userToken")) {
        throw new Error("Missing user token.");
      }
      return VueJwtDecode.decode(localStorage.getItem("userToken"));
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }
}

export default new JwtService();
