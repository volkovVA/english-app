import * as firebase from 'firebase/app'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async REGISTER_USER({commit}, { email, password }) {
      commit('CLEAR_ERROR')
      commit('SET_LOADING', true)
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        // commit('SET_USER', new User(user.user.uid))
        commit('SET_LOADING', false)
        console.log(user)
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
        throw error
      }
    },
    async LOGIN_USER({commit}, {email, password}) {
      commit('CLEAR_ERROR')
      commit('SET_LOADING', true)
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        // commit('SET_USER', new User(user.user.uid))
        commit('SET_LOADING', false)
        console.log(user)
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
        throw error
      }
    },
    AUTO_LOGIN_USER ({ commit }, payload) {
      commit('SET_USER', new User(payload.uid))
    },
    SIGN_OUT({commit}) {
      firebase.auth().signOut()
      commit('SET_USER', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isUserLoggedIn (state) {
      return state.user !== null
    }
  }
}