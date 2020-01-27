<template>
  <div class="about-page">
    <p>אודותינו</p>
    <div class="about-us flex space-between">
      <img src="@/assets/img/about-us/about-hero.jpg" alt />
      <div>
        <p>חברת ביסקיטס טכנולגיות בע"מ הוקמה על ידי מספר שותפים אשר ביצעו שורה של תפקידים בכירים בעולם הפנסיה והביטוח והובילו פרויקטים מגוונים ומורכבים בתחום מערכות המידע לארגונים. בין ההישגים הבולטים: שיתוף פעולה מול משרד האוצר בנושא העברת המידע הפנסיוני לגופים המוסדיים ("הממשק האחיד"), פרוייקטים עמוקים באגפי הגבייה בחברות ביטוח שונות, בקרות והתאמות כספיות לגופים פיננסים והטמעת מערכות מידע פנים ארגוניות לניהול משאבי אנוש</p>
        <p>הניסיון הרב שצברנו בתחום הפנסיה והביטוח וההתמודדות המעמיקה מול האתגרים אשר טומן בחובו ממשק המעסיקים, הביאו אותנו להבנה כי אין כיום בנמצא פתרון יעיל, מקיף וממצה העונה על צרכיהם של מגזרים עסקיים שונים ובעלי דרישות מגוונות. מתוך תפיסה זו, חברנו יחדיו על מנת להעניק תחת קורת גג אחת את כל השירותים התפעוליים הנדרשים בעולם הפנסיוני העדכני, תוך שקיפות מלאה ותשומת לב שירותית, איכותית ומקצועית. אנו מאמינים כי כבר בתחילת ההתקשרות מול לקוחותינו, נדרשת בנייה של תהליך מבוקר ומותאם אישית.</p>
      </div>
    </div>
    <div class="affiliates">
      <div class="box">
        <img src="@/assets/img/about-us/1.svg" alt />
        <p>המידע הכלול באתר זה אינו בא במקום ייעוץ ואין לפעול על פיו אלא לאחר קבלת ייעוץ אישי המתחשב בצרכיו ובנתוניו האישיים של כל אדם</p>
      </div>
      <div class="box">
        <img src="@/assets/img/about-us/2.svg" alt />
        <p>המידע הכלול באתר זה אינו בא במקום ייעוץ ואין לפעול על פיו אלא לאחר קבלת ייעוץ אישי המתחשב בצרכיו ובנתוניו האישיים של כל אדם</p>
      </div>
      <div class="box">
        <img src="@/assets/img/about-us/3.svg" alt />
        <p>המידע הכלול באתר זה אינו בא במקום ייעוץ ואין לפעול על פיו אלא לאחר קבלת ייעוץ אישי המתחשב בצרכיו ובנתוניו האישיים של כל אדם</p>
      </div>
      <div class="box">
        <img src="@/assets/img/about-us/4.svg" alt />
        <p>המידע הכלול באתר זה אינו בא במקום ייעוץ ואין לפעול על פיו אלא לאחר קבלת ייעוץ אישי המתחשב בצרכיו ובנתוניו האישיים של כל אדם</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.about-page {
  text-align: right;
  padding: 30px;
  line-height: 1.4rem;
  font-size: 1.2rem;
}

.about-us {
  display: flex;
  margin-bottom: 2rem;
}

.about-us img {
  width: 42rem;
  height: 40rem;
}

.affiliates {
  display: flex;
  width: 100%;
}

.box {
  margin: 5rem;
  font-size: 1rem;
  width: 15rem;
  margin: 0 auto;

}

.box img {
  width: 12rem;
  height: 12rem;
  margin-bottom: 1rem;
}

@media (max-width: 850px) {
  .about-us {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 2rem;
}

  .about-us img {
    width: 100%;
    height: 100%;
    width: 80vw;
  }

.affiliates {
  display: flex;
  flex-direction: column;
  width: 100%;
}


}


</style>
