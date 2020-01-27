import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";
import questions from '../services/question.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      loadedQuestions: questions.getQuestions(),
      token: null
    },
    mutations: {

      setPosts(state, posts) {
        state.loadedPosts = posts;
      },

      addPost(state, post) {
        state.loadedPosts.push(post)
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      },

      setToken(state, token) {
        console.log("token:", token);
        
        state.token = token;
      },

      clearToken(state) {
        state.token = null;
      },

      // ============Questions=========================

      setQuestions(state, questions) {
        state.loadedQuestions = questions;
      },

      addQuestions(state, question) {
        state.loadedQuestions.push(question)
      },

      editQuestions(state, editedQuestion) {
        const questionIndex = state.loadedQuestions.findIndex(
          question => question.id === editedQuestion.id
        );
        state.loadedQuestions[questionIndex] = editedQuestion
      },



    },


    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get("/posts.json")
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              postsArray.push({ ...data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => context.error(e));
      },

      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios
          .post("https://biskits-db.firebaseio.com/posts.json?auth="+ vuexContext.state.token, createdPost)
          .then(result => {
            vuexContext.commit('addPost', { ...createdPost, id: result.data.name })
          })
          .catch(e => console.log(e));
      },



      editPost(vuexContext, editedPost) {
        return axios.put("https://biskits-db.firebaseio.com/posts/" +
          editedPost.id +
          ".json?auth=" + vuexContext.state.token , editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },

      deletePost( vuexContext, editedPost){
        return axios.delete("https://biskits-db.firebaseio.com/posts/" +
          editedPost.id +
          ".json?auth=" + vuexContext.state.token , editedPost)
          .then(res => {
            console.log('res: ',res);
            
          })
          .catch(e => console.log(e))
      },


      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },


      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.idToken);
            localStorage.setItem("token", result.idToken);
            localStorage.setItem( "tokenExpiration", new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);

            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
          })
          .catch(e => console.log(e));
      },



      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },


      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      },


      // ============Questions=========================

      getQuestions(vuexContext){
        return axios.get("/posts.json")
          .then(data => {
            const questionsArray = [];
            for (const key in data) {
              questionsArray.push({ ...data[key], id: key });
            }
            vuexContext.commit("setQuestions", questionsArray);
          })
          .catch(e => context.error(e));
      }
      





    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
      loadedQuestions(state) {
        return state.loadedQuestions;
      },
    }
  });
};

export default createStore;
