import Api from "../api";
import { ISkillParams } from "./protocols";
// import Swal from "sweetalert2";

export default {
  async getAllData() {
    const response = await Api().get("/skills", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(skill: ISkillParams) {
    try {
      await Api().post("/skills", skill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
