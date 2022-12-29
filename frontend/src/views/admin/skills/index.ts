import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import SkillService from "@/services/Skill/SkillService";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Swal from "sweetalert2";

export default defineComponent({
  name: "AdminSkillsIndexPage",
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
        icon: "",
      },
      Skills: [],
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        icon: { required },
      },
    };
  },
  mounted() {
    this.getSkills();
  },
  methods: {
    async getSkills() {
      this.Skills = await SkillService.get();
    },
    async createSkill() {
      try {
        this.isSubmitted = true;
        this.v$.$touch();

        console.log(this.v$.$invalid);

        if (this.v$.$invalid) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você precisa incluir todos os campos obrigatórios!",
          });
          return;
        }

        await SkillService.post(this.form);
        this.getSkills();
        this.isSubmitted = false;
        this.form.name = "";
        this.form.icon = "";
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Alguma coisa deu errado aqui!",
        });
      }
    },
    patchSkill(id: string) {
      this.$router.push({
        name: "AdminSkillsId",
        params: { id },
      });
    },
    async deleteSkill(id: string) {
      await SkillService.delete(id);
      this.getSkills();
    },
  },
});
