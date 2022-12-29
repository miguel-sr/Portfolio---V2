import SkillService from "@/services/Skill/SkillService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsComponent",
  data() {
    return {
      Skills: [],
    };
  },
  mounted() {
    this.loadSkills();
  },
  methods: {
    async loadSkills() {
      this.Skills = await SkillService.get();
    },
  },
});
