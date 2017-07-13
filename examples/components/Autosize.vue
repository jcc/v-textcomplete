<template>
  <div class="row">
    <div class="example">
      <h5>Autosize and Resize</h5>
      <div class="example-box">
        <div class="box-left col-md-6">
          <text-complete v-model="content" resize="none" autosize></text-complete>
        </div>
        <div class="box-right col-md-12" v-if="show">
<pre class=" language-html code-toolbar"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text-complete</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">resize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">autosize</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text-complete</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></code></pre>
        </div>
        <div class="box-footer" @click="showCode">
          {{ show ? 'Hide Code' : 'Show Code' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextComplete from '../../src/TextComplete'

export default {
  components: { TextComplete },
  data() {
    return {
      show: false,
      content: '',
    }
  },
  methods: {
    showCode() {
      this.show = !this.show
    }
  }
}
</script>
