<template>
  <div class="questions-and-answers-page">
    <h1>שאלות ותשובות</h1>
    <QuestionsList :questions="loadedQuestions" />
  </div>
</template>


<script>
import QuestionsList from "../../components/questions/QuestionsList.vue";

export default {
  name: "questions",
  components: {
    QuestionsList
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    showAnswer() {
      this.isShow = !this.isShow;
    }
  },
  computed: {
    loadedQuestions() {
      return this.$store.getters.loadedQuestions;
    }
  }
};
</script>



<style  scoped>

h1{
  text-align: center;
}
.questions-and-answers-page {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
}

</style>