<template>
  <v-app>
    <home-app-bar />
    <home-drawer />
    <home-view />
  </v-app>
</template>

<script>
export default {
  name: "HomeLayout",

  components: {
    HomeAppBar: () => import("@/layouts/home/AppBar"),
    HomeDrawer: () => import("@/layouts/home/Drawer"),
    HomeView: () => import("@/layouts/home/View")
  },

  data: () => ({
    expandOnHover: false
  })
};
</script>
