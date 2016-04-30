import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'

Vue.use(Vuex)

export const STORAGE_KEY = 'NotesApp-Vuejs'

const state = {
  notes: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  activeNote: {}
}

export const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false,
      show: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },
  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  TOGGLE_NOTE (state) {
    if (state.activeNote) {
      state.activeNote.favorite = !state.activeNote.favorite
    }
  },
  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },
  SHOW_MARK (state) {
    if (state.activeNote) {
      state.activeNote.show = !state.activeNote.show
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  middlewares
})
