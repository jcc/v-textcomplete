const ENTER = 'ENTER'
const UP = 'UP'
const DOWN = 'DOWN'
const OTHER = 'OTHER'
const BS = 'BS'

export default {
  methods: {
    keyEvent(e) {
      if (this.showList) {
        let eventKey = this.getCode(e)

        switch(eventKey) {
          case ENTER:
            if(this.actived.value) {
              e.preventDefault()
              this.emitEnterEvent()
            }
            break
          case UP:
            e.preventDefault()
            this.emitMoveEvent(UP)
            break
          case DOWN:
            e.preventDefault()
            this.emitMoveEvent(DOWN)
            break
        }

        this.$emit('key-down', e)
      }
    },
    keyUp(e) {
      this.$emit('key-up', e)
    },
    emitEnterEvent() {
      this.selectList(this.actived.value)
      this.showList = false
      this.actived.value = ''
      this.actived.index = 0
    },
    emitMoveEvent(type) {
      let length = this.list.length
      if(type == UP) {
        this.actived.index = (this.actived.value == '' || this.actived.index == 0)
                              ? length - 1 : this.actived.index - 1
      } else if (type == DOWN) {
        this.actived.index = (this.actived.value == '' || this.actived.index == length - 1)
                              ? 0 : this.actived.index + 1
      }
      this.actived.value = this.list[this.actived.index]
    },
    getCode(keyEvent) {
      return keyEvent.keyCode === 8 ? BS // backspace
            : keyEvent.keyCode === 9 ? ENTER // tab
            : keyEvent.keyCode === 13 ? ENTER // enter
            : keyEvent.keyCode === 38 ? UP // up
            : keyEvent.keyCode === 40 ? DOWN // down
            : keyEvent.keyCode === 83 && keyEvent.shiftKey ? DOWN // shift-w
            : keyEvent.keyCode === 87 && keyEvent.shiftKey ? UP // shift-s
            : OTHER
    },
  }
}
