import { defineComponent } from "vue";
import LoaderComponent from "@/components/LoaderComponent/LoaderComponent.vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import ProjectService from "@/services/Project/ProjectService";
import SkillService from "@/services/Skill/SkillService";

export default defineComponent({
  name: "ProjectIndexPage",
  components: {
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      project: {
        name: "",
        description: "",
        deploy_url: "",
        isDeployed: true,
        github_url: "",
        skills: [""],
        coverImage: "",
        fullPageImage: "",
      },
    };
  },
  created() {
    this.project.skills.length = 0;
    this.loadProject();
  },
  methods: {
    async loadProject() {
      console.log();
      await ProjectService.get(
        window.location.pathname.replaceAll("/work/", "")
      ).then((project) => {
        this.project.name = project.name;
        this.project.description = project.description;
        this.project.deploy_url = project.deploy_url;
        if (project.deploy_url === "") {
          this.project.isDeployed = false;
        }
        this.project.github_url = project.github_url;
        this.project.coverImage = project.coverImage;
        this.project.fullPageImage = project.fullPageImage;

        project.skills.forEach(async (id: string) => {
          await SkillService.get(id).then((item) => {
            this.project.skills.push(item);
          });
        });
      });
    },
  },
});
