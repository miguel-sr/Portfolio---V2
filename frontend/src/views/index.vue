<template>
  <div>
    <NavbarComponent />
    <HeroComponent />
    <AboutComponent />
    <SkillsComponent />
    <WorksComponent />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent.vue";
import HeroComponent from "../components/HeroComponent/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent/AboutComponent.vue";
import SkillsComponent from "../components/SkillsComponent/SkillsComponent.vue";
import WorksComponent from "../components/WorksComponent/WorksComponent.vue";
import FooterComponent from "../components/FooterComponent/FooterComponent.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    FooterComponent,
  },
});
</script>
