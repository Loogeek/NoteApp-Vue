// 获取应用state下的全部节点
export const getNotes = state => state.notes
// 获取当前选中节点
export const getActiveNote = state => state.activeNote
// 获取当前节点的文本内容
export const getActiveNoteText = state => {
  const text = state.activeNote && state.activeNote.text
  return text ? state.activeNote.text : ''
}
// 获取当前节点的显示模式，如果marked为true则文本在Markdown模式，否则为编辑模式
export const getActiveNoteShow = state => {
  if (state.activeNote) {
    return !state.activeNote.marked
  }
}
