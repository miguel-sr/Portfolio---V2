import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import SkillService from "@/services/Skill/SkillService";

export default defineComponent({
  name: "AdminProjectId",
  components: {
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
  },
  data() {
    return {
      id: "",
      form: {
        name: "",
        icon: "",
      },
    };
  },
  mounted() {
    this.loadSkill();
  },
  methods: {
    async loadSkill() {
      await SkillService.get(
        new URLSearchParams(window.location.search).get("id")
      ).then((skill) => {
        this.id = skill.id;
        this.form.name = skill.name;
        this.form.icon = skill.icon;
      });
    },
    async patchSkill(id: string) {
      await SkillService.patch(id, this.form);
      this.$router.push("/admin/skills");
    },
  },
});
