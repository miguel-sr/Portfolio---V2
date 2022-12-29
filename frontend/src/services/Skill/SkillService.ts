import Api from "../api";
import Swal from "sweetalert2";
import { ISkillParams } from "./protocols";

export default {
  async get(id?: string | null) {
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
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Skill criada com sucesso!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao criar skill!",
      });
    }
  },
  async patch(id: string, skill: ISkillParams) {
    console.log(skill);
    try {
      await Api().patch("/skills/" + id, skill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Dados atualizados com sucesso!",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao atualizar dados!",
      });
    }
  },
  async delete(id: string) {
    try {
      await Api().delete("/skills/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Skill deletada com sucesso!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao deletar skill!",
      });
    }
  },
};
