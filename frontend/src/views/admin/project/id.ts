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
  name: "AdminProjectId",
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
      id: "",
      form: {
        name: "",
        description: "",
        deploy_url: "",
        github_url: "",
        skills: [],
        coverImage: "",
        fullPageImage: "",
      },
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
    this.loadProject();
    this.getSkills();
  },
  methods: {
    async getSkills() {
      this.Skills = await SkillService.get();
    },
    async loadProject() {
      await ProjectService.get(
        new URLSearchParams(window.location.search).get("id")
      ).then((skill) => {
        this.id = skill.id;
        this.form.name = skill.name;
        this.form.description = skill.description;
        this.form.deploy_url = skill.deploy_url;
        this.form.github_url = skill.github_url;
        this.form.skills = skill.skills;
        this.form.coverImage = skill.coverImage;
        this.form.fullPageImage = skill.fullPageImage;
      });
    },
    async patchProject(id: string) {
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

        await ProjectService.patch(id, this.form);
        this.$router.push("/admin/work");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Alguma coisa deu errado aqui!",
        });
      }
    },
  },
});
