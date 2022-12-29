import Api from "../api";
import { ISkillParams } from "./protocols";

export default {
  async get(id?: string) {
    if (id) {
      const response = await Api().get("/skills/" + id);
      return response.data;
    }
    const response = await Api().get("/skills");
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
  async patch(id: string, skill: ISkillParams) {
    try {
      await Api().patch("/skills/" + id, skill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  async delete(id: string) {
    try {
      await Api().delete("/skills/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
