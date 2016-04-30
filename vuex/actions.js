function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export const addNote = makeAction('ADD_NOTE')
export const deleteNote = makeAction('DELETE_NOTE')
export const toggleNote = makeAction('TOGGLE_NOTE')
export const showMark = makeAction('SHOW_MARK')
export const addNoteStorage = makeAction('ADD_NOTE_STORAGE')
export const updateActiveNote = makeAction('UPDATE_ACTIVE_NOTE')

export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}
