import Api from "../api";
import { IProjectParams } from "./protocols";

export default {
  async get(id?: string) {
    if (id) {
      const response = await Api().get("/skills/" + id);
      return response.data;
    }
    const response = await Api().get("/skills");
    return response.data;
  },
  async post(project: IProjectParams) {
    try {
      await Api().post("/skills", project, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  async patch(id: string, project: IProjectParams) {
    try {
      await Api().patch("/skills/" + id, project, {
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
