import { mutations } from '../../vuex/store'

const { ADD_NOTE } = mutations

describe('mutations', () => {
  it('should have correct message', () => {
    const state = {
      notes: [],
      activeNote: {}
    }
    ADD_NOTE(state)
    expect(state.activeNote.text).toEqual('New note')
    expect(state.activeNote.favorite).toEqual(false)
  })
})
