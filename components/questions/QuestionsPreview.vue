<template>
  <div class="question-content">
    <p>{{ question }}</p>
    <p v-if="isShow">{{ answer }}</p>
    <img v-if="isArrow" class="read-more-icon" @click="showAnswer" src="@/assets/img/read-more-icon.svg" alt />
    <img v-if="!isArrow" class="read-more-icon" @click="showAnswer" src="@/assets/img/arrow-up.svg" alt />
  </div>
</template>

<script>
export default {
  name: "QuestionsPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShow: false,
      isArrow: true
    };
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/questions/" + this.id;
    }
  },
  methods: {
    showAnswer() {
      this.isShow = !this.isShow;
      this.isArrow = !this.isArrow;
    }
  }
};
</script>


<style scoped>
.question-content{
  padding: 1rem;
  border-bottom: 2px rgb(39, 172, 238) solid;
}

.read-more-icon{
  float: left;
  width: 1rem;
  height:1rem;
}
</style>
