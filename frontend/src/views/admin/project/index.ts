import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import ProjectService from "@/services/Project/ProjectService";
import SkillService from "@/services/Skill/SkillService";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Swal from "sweetalert2";

export default defineComponent({
  name: "AdminProjectIndexPage",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
  },
  data() {
    return {
      isSubmitted: false,
      form: {
        name: "",
        description: "",
        deploy_url: "",
        github_url: "",
        skills: [],
        coverImage: "",
        fullPageImage: "",
      },
      Projects: [],
      Skills: [],
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        description: { required },
        github_url: { required },
        skills: { required },
        coverImage: { required },
        fullPageImage: { required },
      },
    };
  },
  mounted() {
    this.getProjects();
    this.getSkills();
  },
  methods: {
    async getSkills() {
      this.Skills = await SkillService.get();
    },
    async getProjects() {
      this.Projects = await ProjectService.get();
    },
    async createProject() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        if (this.v$.$invalid) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você precisa incluir todos os campos obrigatórios!",
          });
          return;
        }

        await ProjectService.post(this.form).then(() => {
          this.getProjects();
          this.isSubmitted = false;
          this.form.name = "";
          this.form.description = "";
          this.form.deploy_url = "";
          this.form.github_url = "";
          this.form.skills = [];
          this.form.coverImage = "";
          this.form.fullPageImage = "";
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Alguma coisa deu errado aqui!",
        });
      }
    },
    patchProject(id: string) {
      this.$router.push({
        name: "AdminProjectId",
        params: { id },
      });
    },
    async deleteProject(id: string) {
      await ProjectService.delete(id);
      this.getProjects();
    },
  },
});
