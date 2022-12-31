import ProjectService from "@/services/Project/ProjectService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorksComponent",
  data() {
    return {
      Projects: [],
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.Projects = await ProjectService.get();
    },
    viewProjectDetails(id: string) {
      this.$router.push({
        path: "/work/" + id,
      });
    },
  },
});
