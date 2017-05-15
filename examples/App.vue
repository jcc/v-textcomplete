<template>
  <div class="container">
    <logo></logo>
    <get-start></get-start>
    <how-to-use></how-to-use>
    <attribute></attribute>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import Logo from './components/Logo'
import GetStart from './components/GetStart'
import HowToUse from './components/Usage'
import Attribute from './components/Attributes'
import FootBar from './components/Footer'
import './css/styles.css'

export default {
  components: {
    Logo,
    GetStart,
    HowToUse,
    Attribute,
    FootBar,
  },
}
</script>

<style lang="scss">
.title {
  color: #979797;
  cursor: pointer;
}
.complete-box {
  max-width: 400px;
  color: #5b5b5b;
}
.textcomplete {
  border: 1px solid #dce7f4;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid #bfcbd9;
  }
}
</style>
