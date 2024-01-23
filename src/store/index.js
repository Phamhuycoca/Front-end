import { createStore } from 'vuex'

export default createStore({
  state: {
    title:''
  },
  getters: {
    getTitle:state=>state.title
  },
  mutations: {
    title(state,data){
      state.title=data;
    }
  },
  actions: {
    Action(context,title){
      context.commit('title',title);
    }
  },
  modules: {
  }
})
