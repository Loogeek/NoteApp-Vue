import { mutations } from '../../vuex/store'

const { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, TOGGLE_NOTE, SHOW_MARK, UPDATE_ACTIVE_NOTE } = mutations

describe('mutations', () => {
  const state = {
    notes: [],
    activeNote: {}
  }

  it('ADD_NOTE Test', () => {
    ADD_NOTE(state)
    expect(state.activeNote.title).toEqual('New Note')
    expect(state.activeNote.text).toEqual('Hello Note!')
    expect(state.activeNote.editing).toEqual(false)
    expect(state.activeNote.favorite).toEqual(false)
    expect(state.activeNote.marked).toEqual(false)
    expect(state.notes.length).toEqual(1)
  })

  it('TOGGLE_NOTE', () => {
    TOGGLE_NOTE(state)
    expect(state.activeNote.favorite).toEqual(true)
  })

  it('SHOW_MARK', () => {
    SHOW_MARK(state)
    expect(state.activeNote.marked).toEqual(true)
  })

  it('UPDATE_ACTIVE_NOTE', () => {
    UPDATE_ACTIVE_NOTE(state, state.notes[0])
    expect(state.activeNote).toEqual(state.notes[0])
  })

  it('DELETE_NOTE', () => {
    DELETE_NOTE(state)
    expect(state.notes.length).toEqual(0)
  })
})
