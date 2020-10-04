<template>
  <div class="home">
    <ProgressCheckIn></ProgressCheckIn>
    <Profile></Profile>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProgressCheckIn from "@/components/home/ProgressCheckIn.vue";
import Profile from "@/components/home/Profile.vue";

@Component({
  components: {
    Profile,
    ProgressCheckIn
  }
})
export default class Home extends Vue {
  created() {
    this.$store.dispatch("profile/loadcurrent");
  }
}
</script>
<style scoped>
/* .home {
  height: 100vh;
} */
/* #map-checkin{
  height: 300px;
} */
</style>