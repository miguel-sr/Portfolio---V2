import api from "../api";
import Swal from "sweetalert2";
import { ILoginParams } from "./protocols";

export default {
  async loginUser(credentials: ILoginParams) {
    try {
      const response = await api().post("/login", credentials);
      const { token } = response.data;

      localStorage.setItem("userToken", token);

      if (token) {
        Swal.fire({
          icon: "success",
          title: "Excelente!",
          text: "Login realizado com sucesso!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao realizar login!",
      });
    }
  },
  async logoutUser() {
    try {
      await api().post("/logout", undefined, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      localStorage.removeItem("userToken");
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Logout realizado com sucesso!",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao realizar logout!",
      });
    }
  },
};
