import Api from "../api";
import Swal from "sweetalert2";
import { IProjectParams } from "./protocols";

export default {
  async get(id?: string) {
    if (id) {
      const response = await Api().get("/projects/" + id);
      return response.data;
    }
    const response = await Api().get("/projects");
    return response.data;
  },
  async post(project: IProjectParams) {
    try {
      await Api().post("/projects", project, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Projeto criado com sucesso!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao criar projeto!",
      });
    }
  },
  async patch(id: string, project: IProjectParams) {
    try {
      await Api().patch("/projects/" + id, project, {
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao atualizar dados!",
      });
    }
  },
  async delete(id: string) {
    try {
      await Api().delete("/projects/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        text: "Projeto deletado com sucesso!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao deletar projeto!",
      });
    }
  },
};
