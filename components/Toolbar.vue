<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleNote"
       class="glyphicon glyphicon-star"
       :class="{starred: activeNote ? activeNote.favorite : ''}">
    </i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    <i @click="showMark"
       class="glyphicon glyphicon-sunglasses"
       :class="{starred: activeNote ? activeNote.show : ''}">
    </i>
  </div>
</template>

<script>
  import { addNote, toggleNote, deleteNote, showMark } from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        notes: state => state.notes,
        activeNote: state => state.activeNote
      },
      actions: {
        addNote,
        toggleNote,
        deleteNote,
        showMark
      }
    }
  }
</script>

<style media="screen">
  #toolbar {
    float: left;
    width: 80px;
    height: 100%;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
  }

  #toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  #toolbar i:hover {
    opacity: 1;
  }

  .starred {
    color: #F7AE4F;
  }
</style>
