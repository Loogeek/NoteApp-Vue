<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <ul class="list-group">
        <li v-for="note in filteredNotes">
          <label class="list-group-item list-item-laber"
            @dblclick="note.editing = true"
            @click="updateActiveNote(note)"
            :class="{active: activeNote === note}">
            {{ note.title }}
          </label>
          <input
            class="list-group-item list-item-input"
            v-show="note.editing"
            v-focus="note.editing"
            @blur="doneEditTitle"
            @keyup.enter="doneEditTitle"
            @keyup.esc="cancelEditTitle">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { updateActiveNote, doneEditTitle, cancelEditTitle } from '../vuex/actions'
  import { getNotes, getActiveNote } from '../vuex/getters'

  export default {
    data () {
      return {
        show: 'all'
      }
    },
    vuex: {
      getters: {
        notes: getNotes,
        activeNote: getActiveNote
      },
      actions: {
        updateActiveNote,
        doneEditTitle,
        cancelEditTitle
      }
    },
    directives: {
      focus (value) {
        if (value) {
          this.vm.$nextTick(() => {
            this.el.focus()
          })
        }
      }
    },
    computed: {
      filteredNotes () {
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorites') {
          return this.notes.filter(note => note.favorite)
        }
      }
    }
  }

</script>

<style media="screen">
  #notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  #list-header {
    padding: 5px 25px 25px 25px;
  }

  #list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  #notes-list .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }

  #notes-list .container .list-group-item {
    border: 0;
    border-radius: 0;
  }

  .list-item-laber {
    font-weight: 300;
    font-size: 15px;
  }

  .container .list-item-input {
    width: 100%;
    margin-top: -41px;
    line-height: 21px;
    z-index: 10;
    outline: none;
    font-size: 15px;
    font-weight: 300;
  }
</style>
