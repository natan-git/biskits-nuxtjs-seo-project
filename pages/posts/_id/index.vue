<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>

      <p class="post-content">{{ loadedPost.p1 }}</p>
      <p class="post-content">{{ loadedPost.p2 }}</p>
      <p class="post-content">{{ loadedPost.p3 }}</p>
      <p class="post-content">{{ loadedPost.p4 }}</p>
      <p class="post-content">{{ loadedPost.p5 }}</p>
      <p class="post-content">{{ loadedPost.p6 }}</p>
      <p class="post-content">{{ loadedPost.p7 }}</p>
      <p class="post-content">{{ loadedPost.p8 }}</p>
      <p class="post-content">{{ loadedPost.p9 }}</p>
      <p class="post-content">{{ loadedPost.p10 }}</p>

    </section>
    <div class="post-details">
      <div class="post-detail">Last updated on {{ loadedPost.updatedDate | date}}</div>
      <div class="post-detail">Written by {{ loadedPost.author }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData(context) {
    return axios
      .get(
        "https://biskits-db.firebaseio.com/posts/" + context.params.id + ".json"
      )
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => console.log(e));
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  background-color: #00CECE;
}

.post {
  width: 70%;
  margin: 0 auto;
  background-color: rgb(52, 52, 52);
  color: white;
  padding: 3rem;
  font-size: 1.4rem;
  line-height: 2rem;
}

@media (max-width: 768px) {
  .post {
    width: 90%;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  /* border-bottom: 3px solid #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

.post-content {
  width: 80%;
  text-align: right;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
