<template>
  <div class="home-page-container">
    <section class="greet-container">
      <div class="greet-box flex">
        <img src="@/assets/img/home-page-hero.svg" alt />
        <div class="greet-txt right">
          <h2>ביסקיטס טכנולוגיות - תפעול פנסיוני</h2>
          <p>הניסיון הרב שצברנו בתחום הפנסיה והביטוח, הביאו אותנו להבנה כי אין כיום פתרון יעיל, מקיף וממצה העונה על צרכיהם של מגזרים עסקיים שונים. אנו מעניקים תחת קורת גג אחת את כל השירותים התפעוליים הנדרשים בעולם הפנסיוני העדכני, תוך שקיפות מלאה ותשומת לב שירותית, איכותית ומקצועית.</p>
          <br />
          <p>אנו מאמינים כי כבר בתחילת ההתקשרות מול לקוחותינו, נדרשת בנייה של תהליך מבוקר ומותאם אישית</p>
        </div>
      </div>
    </section>

    <section class="services-container">
      <h3>מפרט השירותים</h3>
      <div class="box-container flex ">
        <div class="box flex col align-end">
          <div class="flex align-c">
            <p>קליטת קבצים אחידים מכל מערכות השכר</p>
            <img src="@/assets/img/services/1.svg" alt />
          </div>
          <div class="flex align-c">
            <p>התאמות החזרי כספים</p>
            <img src="@/assets/img/services/2.svg" alt />
          </div>
          <div class="flex align-c">
            <p>דו”ח סיכום פעילות חודשית ללקוח</p>
            <img src="@/assets/img/services/3.svg" alt />
          </div>
          <div class="flex align-c">
            <p>מנהל תיק אישי</p>
            <img src="@/assets/img/services/4.svg" alt />
          </div>
          <div class="flex align-c">
            <p>מוקד פניות טלפוני לעובדים</p>
            <img src="@/assets/img/services/5.svg" alt />
          </div>
        </div>

        <div class="box flex col align-end">
          <div class="flex align-c">
            <p>בקרה חודשית טרום דיווח למניעת שגויים</p>
            <img src="@/assets/img/services/6.svg" alt />
          </div>
          <div class="flex align-c">
            <p>המצאת מבני פוליסות העובדים והתאמת הדיווח</p>
            <img src="@/assets/img/services/7.svg" alt />
          </div>
          <div class="flex align-c">
            <p>טפסי עזר לצורך הכנת 161</p>
            <img src="@/assets/img/services/8.svg" alt />
          </div>
          <div class="flex align-c">
            <p>העברה המידע הפנסיוני באופן מאובטח ובהתאם לתקנות הרגולציה</p>
            <img src="@/assets/img/services/9.svg" alt />
          </div>
          <div class="flex align-c">
            <p>טיפול שוטף בשגויים - מעקב קבוע אחר היזונים חוזרים</p>
            <img src="@/assets/img/services/10.svg" alt />
          </div>
        </div>
      </div>
    </section>

    <section class="why-we-container">
      <div class="icons flex space-around">
        <div class="why-we-icon flex col justify-center align-c">
          <div class="circle-border flex justify-center align-c">
            <img src="@/assets/img/why we/icon-4.svg" alt />
          </div>
          <h4>שקיפות מלאה</h4>
          <p>דו”ח פעילות מרכז חודשי ועדכונים שוטפים.</p>
        </div>
        <div class="why-we-icon flex col justify-center align-c">
          <div class="circle-border flex justify-center align-c">
            <img src="@/assets/img/why we/icon-3.svg" alt />
          </div>
          <h4>אישי, אנושי, מקצועי</h4>
          <p>איש קשר אישי ילווה אותך לכל אורך התהליך ובכל שתזדקק</p>
        </div>
        <div class="why-we-icon flex col justify-center align-c">
          <div class="circle-border flex justify-center align-c">
            <img src="@/assets/img/why we/icon-2.svg" alt />
          </div>
          <h4>כל הדוחות שצריך</h4>
          <p>דוחות 161, אישורי הפקדות, עתודה יעודה ועוד.. ללא עלות נוספת</p>
        </div>
        <div class="why-we-icon flex col justify-center align-c">
          <div class="circle-border flex justify-center align-c">
            <img src="@/assets/img/why we/icon-1.svg" alt />
          </div>
          <h4>המידע שלך בטוח</h4>
          <p>אנו עובדים בהתאם לתקן אבטחת המידע ISO/IEC 27001</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {}
};
</script>

<style scoped>
/* ====greet css==== */

.greet-container {
  padding: 5rem;
  min-height: 60vh;
}

@media (max-width: 850px) {
  .greet-container {
    padding: 1rem;
  }
  .greet-box {
    flex-direction: column;
  }
  .greet-box img{
    height: 10rem;
  }
}

/* =======services css========= */
.services-container {
  min-height: 25rem;
  padding: 2rem;
  background-color: rgb(245, 245, 245);
}

.services-container h3 {
  text-align: right;
}
.services-container img {
  height: 2rem;
  width: 2rem;
  margin-left: 0.5rem;
}

.services-container .box-container .box {
  margin: 0 auto;
  text-align: right;
} 

@media (max-width: 850px) {
  .box-container {
    flex-direction: column;
  }
  .box{
    margin: 0rem;
  }
}

/* ======why we css======= */

.why-we-container {
  min-height: 25rem;
  padding: 4rem;
  background-color: rgb(255, 255, 255);
}
.icons {
  width: 100%;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
}
.why-we-icon {
  text-align: center;
  padding: 2rem;
}

.circle-border {
  padding: 1rem;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px #00cece solid;
}
.circle-border img {
  margin: 0;
}
.circle-border p {
  margin: 0;
  padding: 0;
}
.circle-border h4 {
  width: 5rem;
}

@media (max-width: 850px) {
  .icons {
    flex-direction: column;
  }
  .services-container .box-container .box {
  margin: 0;
} 
}


</style>

