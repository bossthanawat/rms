<template>
  <v-main>
    <router-view />
    <!-- <home-footer /> -->
  </v-main>
</template>

<script>
export default {
  name: "CoreView",

  components: {
    // HomeFooter: () => import("@/layouts/home/Footer")
  }
};
</script>
