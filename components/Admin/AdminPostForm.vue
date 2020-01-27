<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.previewText">preview text</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p1">paragraph 1</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p2">paragraph 2</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p3">paragraph 3</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p4">paragraph 4</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p5">paragraph 5</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p6">paragraph 6</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p7">paragraph 7</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p8">paragraph 8</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p9">paragraph 9</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.p10">paragraph 10</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    <AppButton type="button" style="margin-left: 10px" btn-style="delete" @click="onDelete">delete</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            p5: "",
            p6: "",
            p7: "",
            p8: "",
            p9: "",
            p10: "",
            previewText: ""
          }
    };
  },
  // data() {
  //   return {
  //     editedPost: this.post
  //       ? { ...this.post }
  //       : {
  //           author: "",
  //           title: "",
  //           thumbnail: "",
  //           content: "",
  //           previewText: ""
  //         }
  //   };
  // },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    },
    onDelete(){
      this.$emit("deletePost", this.editedPost);
    }
  }
};
</script>
