<template>
  <div id="note-editor">
    <textarea v-show="activeNoteShow"
      @input="editNote"
      :value="activeNoteText"
      class="form-control">
    </textarea>
    <div v-else
      v-html="activeNoteText | marked">
    </div>
  </div>
</template>

<script>
  // import marked from 'marked'
  import { editNote } from '../vuex/actions'
  import { getActiveNoteText, getActiveNoteShow } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        activeNoteText: getActiveNoteText,
        activeNoteShow: getActiveNoteShow
      },
      actions: {
        editNote
      }
    }
  }
</script>

<style media="screen">
  #note-editor {
    height: 100%;
    margin-left: 380px;
  }

  #note-editor textarea,
  #note-editor div {
    display: inline-block;
    border: 0;
    height: 100%;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
