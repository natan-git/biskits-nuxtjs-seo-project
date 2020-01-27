<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close=" displaySidenav = false" />
    <nuxt />
    <theFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import theFooter from "@/components/footer/Footer";

export default {
  components: { TheHeader, TheSidenav,theFooter },
  data() {
    return{
      displaySidenav: false

    }
  }
};
</script>

<style lang="scss" scoped>

</style>


