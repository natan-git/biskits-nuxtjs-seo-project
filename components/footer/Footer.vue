<template>
  <div class="footer-container">
    <div class="box-container flex space-between">
      <div class="left-box">
        <h2>Biskits</h2>
        <p>המידע הכלול באתר זה אינו בא במקום ייעוץ ואין לפעול על פיו אלא לאחר קבלת ייעוץ אישי המתחשב בצרכיו ובנתוניו האישיים של כל אדם, בכלל זה: אין לראות במידע הכלול באתר זה משום ייעוץ השקעות ו/או ייעוץ פנסיוני ו/או תחליף לייעוץ כאמור המתחשב בנתונים ובצרכיו המיוחדים של כל אדם.</p>
      </div>

      <div class="center-box flex col">
        <h5>תפריט ראשי</h5>
        <nuxt-link to="/posts">בלוג מאמרים</nuxt-link>
        <nuxt-link to="/about">תוכנית השותפים</nuxt-link>
        <nuxt-link to="/about">סליקה פנסיונית</nuxt-link>
        <nuxt-link to="/about">שאלות ותשובות</nuxt-link>
        <nuxt-link to="/about">אודותינו</nuxt-link>
        <nuxt-link to="/about">צור קשר</nuxt-link>
        <nuxt-link to="/admin">Admin</nuxt-link>
      </div>

      <div class="right-box">
        <p>info@biskits.co.il :כתובת דוא״ל</p>
        <p>טלפון: 072-3900269</p>
        <p>בן יהודה 218 תל אביב -יפו</p>
        <a href="https://www.facebook.com/biskitos/" target="_blank"><img class="icon" src="@/assets/img/social-media-icons/facebook.svg" alt /></a>
        <a href="https://www.linkedin.com/company/biskits/" target="_blank"><img class="icon" src="@/assets/img/social-media-icons/linkedin.svg" alt /></a>
        <a href="mailto:info@biskits.co.il?Subject=" target="_top"><img class="icon" src="@/assets/img/social-media-icons/mail.svg" alt /></a>
      </div>
    </div>
    <p class="Copyright">Copyright © 2019 Biskits technologies. All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: "theFooter",
  components: {}
};
</script>

<style scoped>
.footer-container {
  background-color: rgb(66, 66, 66);
  min-height: 15rem;
  padding: 2rem;
}

.left-box {
  text-align: right;
  color: white;
  width: 20%;
}

.center-box {
  text-align: right;
  color: white;
}

.right-box {
  text-align: right;
  color: white;
}

.Copyright {
  text-align: center;
  color: white;
  padding-top: 1.5rem;
}

img {
  width: 2rem;
  height: 2rem;
}

a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #00cece;
}

h2 {
  text-align: center;
  color: #00cece;
}

@media (max-width: 850px) {
  .box-container {
    flex-direction: column;
    align-items: center

  }
  .left-box p {
    display: none;
  }
  .center-box {
    display: none;
  }
  .right-box {
    text-align: center;
  }
}
</style>