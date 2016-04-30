export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const toggleNote = ({ dispatch }) => {
  dispatch('TOGGLE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const showMark = ({ dispatch }) => {
  dispatch('SHOW_MARK')
}

export const addNoteStorage = ({ dispatch }) => {
  dispatch('ADD_NOTE_STORAGE')
}
