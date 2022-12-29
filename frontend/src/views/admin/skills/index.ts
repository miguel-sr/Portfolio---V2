import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import SkillService from "@/services/Skill/SkillService";

export default defineComponent({
  name: "AdminSkillsIndexPage",
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
  mounted() {
    this.getSkills();
  },
  methods: {
    onSubmit() {
      this.isSubmitted = true;
    },
    async getSkills() {
      this.Skills = await SkillService.get();
    },
    async createSkill() {
      await SkillService.post(this.form);
      this.getSkills();
      this.form.name = "";
      this.form.icon = "";
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
