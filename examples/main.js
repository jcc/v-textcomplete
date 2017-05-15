import Vue from 'vue'
import App from './App'
import Emojione from 'emojione'

Vue.filter('coverToEmoji', function (value) {
  return Emojione.shortnameToUnicode(value)
})

new Vue({
  el: '#app',
  render: h => h(App)
})
