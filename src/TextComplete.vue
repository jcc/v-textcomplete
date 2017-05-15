<template>
  <div class="complete-box">
    <textarea :id="'v-textcomplete-' + id"
              ref="textarea"
              :value="value"
              @input="updateValue($event.target.value)"
              :style="{'line-height': lineHeight + 'px'}"
              :class="areaClass"
              name="textcomplete"
              @keydown="keyEvent"></textarea>

    <div class="autocomplete transition" :id="'autocomplete-' + id" v-show="showList">
      <ul>
        <li v-for="(value, index) in list"
            :class="(actived.value == value) ? 'active' : ''"
            @click="selectList(value)"
            v-html="template(value)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { default as getCaretCoordinates } from 'textarea-caret'
import { default as keyEvent } from './keyEvent'

export default {
  mixins: [keyEvent],
  props: {
    value: {
      type: String,
      default: ''
    },
    areaClass: {
      type: String,
      default: ''
    },
    lineHeight: {
      type: Number,
      default: 20
    },
    strategies: {
      type: Array,
      default() {
        return []
      }
    },
    selectedDefaultFirst: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      id: Math.random().toString(36).substr(5),
      content: this.value,
      showList: false,
      cursor: 0,
      list: [],
      matched: [],
      match: '',
      actived: { value: '', index: 0 },
      template: () => {},
      replace: () => {},
    }
  },
  watch: {
    value() {
      this.change()
    }
  },
  methods: {
    updateValue: function (value) {
      this.$refs.textarea.value = value

      this.$emit('input', value)
    },
    change() {
      let that = this
      this.strategies.forEach((item) => {
        let autocomplete = document.getElementById('autocomplete-' + that.id)
        let textarea = document.getElementById('v-textcomplete-' + that.id)
        let content = textarea.value.substring(0, textarea.selectionEnd)
        let match = ''

        match = content.match(item.match)

        if (match != null) {
          let i = match[2].replace(/(^\s*)|(\s*$)/g, '')
          let cursorPosition = that.getCursorPosition(textarea)
          let scroll = that.getElementScroll(textarea)
          let coordinates = getCaretCoordinates(textarea, cursorPosition)
          let top = coordinates.top + that.lineHeight - scroll.top
          let left = coordinates.left + textarea.offsetLeft

          autocomplete.style.top = top + 'px'
          autocomplete.style.left = left + 'px'

          that.template = item.template
          that.match = item.match
          that.replace = item.replace

          if (item.list != undefined && item.list.length > 0 && match[2] == '') {
            that.list = item.list
          } else {
            item.search(i, that.getList)
          }

          that.matched.push(match)
        } else {
          that.matched.push(null)
        }
      })

      let filterMatched = this.matched.filter((value) => { return value != null }).length > 0

      this.showList = (filterMatched && this.list.length > 0) ? true : false

      if(!this.showList) {
        this.actived.value = ''
        this.actived.index = 0
      }

      if(this.selectedDefaultFirst) {
        this.actived.value = this.list[0]
      }
      this.matched = []
    },
    getElementOffset(element) {
      let rect = element.getBoundingClientRect()
      let {defaultView, documentElement} = element.ownerDocument
      let offset = { top: rect.top + defaultView.pageYOffset, left: rect.left + defaultView.pageXOffset }

      if (documentElement) {
        offset.top -= documentElement.clientTop;
        offset.left -= documentElement.clientLeft;
      }

      return offset;
    },
    getList(list) {
      this.list = list
    },
    selectList(value) {
      let textarea = document.getElementById('v-textcomplete-' + this.id)
      let cursorPosition = this.getCursorPosition(textarea)
      let start = textarea.value.substring(0, textarea.selectionEnd)
      let end = textarea.value.slice(textarea.selectionEnd)

      if (!start.match(this.match)) {
        this.setCaretPosition(textarea, cursorPosition)
        this.showList = false
        this.actived.value = ''
        this.actived.index = 0
        return
      }

      let replace = start.replace(this.match, this.replace(value))

      this.updateValue(replace + end)

      textarea.focus()

      let length  = replace.length

      this.setCaretPosition(textarea, length)

      this.showList = false
      this.actived.value = ''
      this.actived.index = 0
    },
    getCursorPosition(element) {
      var CaretPos = 0;
      if (document.selection) {
        element.focus();

        let selection = document.selection.createRange();

        selection.moveStart ('character', -element.value.length);
        CaretPos = selection.text.length;
      } else if (element.selectionStart || element.selectionStart == '0') {
        CaretPos = element.selectionStart;
      }
      return (CaretPos);
    },
    getElementScroll(element) {
      return { top: element.scrollTop, left: element.scrollLeft };
    },
    setCaretPosition(element, position){
      if(element.setSelectionRange) {
        element.focus();
        setTimeout(() => element.setSelectionRange(position, position), 1)
      } else if (element.createTextRange) {
        var range = element.createTextRange();
        range.collapse(true);
        range.moveEnd('character', position);
        range.moveStart('character', position);
        range.select();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.complete-box {
  position: relative;
  margin: 1em 0 1em;
}
textarea {
  overflow: auto;
}
.autocomplete {
  background-color: #fff;
  position: absolute;
  z-index: 1000;
}
.autocomplete ul {
  list-style: none;
  padding-left: 0;
  border: 1px #f3f5f7 solid;
  border-radius: 3px;
  margin: 0;

  li {
    padding-left: 5px;
    padding-right: 5px;
    border-bottom: 1px solid #f3f5f7;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #f3f5f7;
    }
    span small {
      padding-left: 10px;
    }
  }
  .active {
    background-color: #f3f5f7;
  }
}
</style>
