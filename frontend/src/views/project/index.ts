import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import ProjectService from "@/services/Project/ProjectService";
import SkillService from "@/services/Skill/SkillService";

export default defineComponent({
  name: "ProjectIndexPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      name: "",
      description: "",
      deploy_url: "",
      isDeployed: true,
      github_url: "",
      skills: [""],
      coverImage: "",
      fullPageImage: "",
    };
  },
  created() {
    this.skills.length = 0;
    this.loadProject();
  },
  methods: {
    async loadProject() {
      await ProjectService.get(
        new URLSearchParams(window.location.search).get("id")
      ).then((project) => {
        this.name = project.name;
        this.description = project.description;
        this.deploy_url = project.deploy_url;
        if (project.deploy_url === "") {
          this.isDeployed = false;
        }
        this.github_url = project.github_url;
        this.coverImage = project.coverImage;
        this.fullPageImage = project.fullPageImage;

        project.skills.forEach(async (id: string) => {
          await SkillService.get(id).then((item) => {
            this.skills.push(item);
          });
        });
      });
    },
  },
});
