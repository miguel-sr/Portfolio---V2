import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Swal from "sweetalert2";
import WorkService from "@/services/Project/ProjectService";
import SkillService from "@/services/Skill/SkillService";

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
      isSubmitted: true,
      form: {
        name: "",
        description: "",
        deploy_url: "",
        github_url: "",
        skills: [],
        images: [],
      },
      Project: [],
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
        images: { required },
      },
    };
  },
  mounted() {
    this.getProject();
    this.getSkills();
  },
  methods: {
    async getSkills() {
      this.Skills = await SkillService.get();
    },
    async getProject() {
      this.Project = await WorkService.get();
    },
    async createProject() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        console.log(this.form);

        if (this.v$.$invalid) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você precisa incluir todos os campos obrigatórios!",
          });
          return;
        }

        // await WorkService.post(this.form).then(() => {
        //   this.getProject();
        //   this.isSubmitted = false;
        //   this.form.name = "";
        //   this.form.description = "";
        //   this.form.deploy_url = "";
        //   this.form.github_url = "";
        //   this.form.skills = [];
        //   this.form.images = [];
        // });
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
        name: "AdminWorkId",
        params: { id },
      });
    },
    async deleteProject(id: string) {
      await WorkService.delete(id);
      this.getProject();
    },
  },
});
