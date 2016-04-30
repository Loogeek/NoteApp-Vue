export const getNotes = state => state.notes

export const getActiveNote = state => state.activeNote

export const getActiveNoteText = state => {
  const text = state.activeNote && state.activeNote.text
  return text ? state.activeNote.text : ''
}

export const getActiveNoteShow = state => {
  if (state.activeNote) {
    return !state.activeNote.show
  }
}
