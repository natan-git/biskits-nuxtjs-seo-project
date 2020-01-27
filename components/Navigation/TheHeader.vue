<template>
<div class="header-container">
  <header class="the-header">
    <div class="logo">
      <nuxt-link to="/"><img src="@/assets/img/logo.svg" alt=""></nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list flex justify-center align-c">
        <li class="nav-item"><nuxt-link to="/posts">בלוג מאמרים</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/what_we_do">תוכנית השותפים</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/pension_clearing">סליקה פנסיונית</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/questions">שאלות ותשובות</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">אודותינו</nuxt-link></li>
        <li class="nav-item"><a href="https://www.facebook.com/biskitos/" target="_blank"> <img class="icon" src="@/assets/img/social-media-icons/facebook.svg" alt=""></a> </li>
        <li class="nav-item"><a href="https://www.linkedin.com/company/biskits/" target="_blank"> <img class="icon" src="@/assets/img/social-media-icons/linkedin.svg" alt=""></a> </li>
        <li class="nav-item"><a href="mailto:info@biskits.co.il" target="_blank"> <img class="icon" src="@/assets/img/social-media-icons/mail.svg" alt=""></a> </li>
      </ul>
    </div>
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
}
.icon{
  width: 2rem;
  height: 2rem;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  font-weight: bolder;
  font-size: 1rem;
  color: rgb(61, 61, 61);
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #00CECE;
}
</style>
