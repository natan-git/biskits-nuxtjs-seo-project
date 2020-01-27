<template>
  <section class="question-list">
    <QuestionPreview
      v-for="question in questions"
      :key="question.id"
      :id="question.id"
      :is-admin="isAdmin"
      :question="question.question"
      :answer="question.answer" />
  </section>
</template>

<script>
import QuestionPreview from '@/components/questions/QuestionsPreview.vue'

export default {
  components: {
    QuestionPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    questions: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>

.question-list {
  padding: 4rem;
  text-align: right;
}
</style>

