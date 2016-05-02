import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'

Vue.use(Vuex)

// localStorage存储时的key值
export const STORAGE_KEY = 'NotesApp-Vuejs'
// 获取本地存储中该key值所对应的数据
const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

const state = {
  notes: localStorageData,
  activeNote: localStorageData[0] ? localStorageData[0] : {}
}

export const mutations = {
  // 添加节点
  ADD_NOTE (state) {
    const newNote = {
      title: 'New Note',
      text: 'Hello Note!',
      editing: false,
      favorite: false,
      marked: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  // 编辑节点内容
  EDIT_NOTE (state, event) {
    state.activeNote.text = event.target.value
  },
  // 编辑节点标题
  DONE_EDIT_TITLE (state, event) {
    const value = event.target.value.trim()
    if (value) {
      state.activeNote.title = value
    } else {
      state.activeNote.title = 'New Note'
    }
    state.activeNote.editing = false
  },
  // 取消编辑节点标题
  CANCEL_EDIT_TITLE (state, event) {
    event.target.value = state.activeNote.title
    state.activeNote.editing = false
  },
  // 删除节点
  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  // 切换当前节点的favorite属性
  TOGGLE_NOTE (state) {
    if (state.activeNote) {
      state.activeNote.favorite = !state.activeNote.favorite
    }
  },
  // 选中当前点击节点
  UPDATE_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },
  // 显示当前节点的文本编辑内容或Markdown效果
  SHOW_MARK (state) {
    if (state.activeNote) {
      state.activeNote.marked = !state.activeNote.marked
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  middlewares
})
