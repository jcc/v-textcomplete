<template>
  <div class="row">
    <div id="custom-event" class="example">
      <h5>Form Input Components using Custom Events</h5>
      <div class="example-box">
        <div class="box-left">
          <text-complete class="col-md-6" v-model="content" areaClass="textcomplete" :strategies="strategies"></text-complete>
          <div class="content-show col-md-6">
            <pre><code>{{ content | coverToEmoji }}</code></pre>
          </div>
        </div>
        <div class="box-right col-md-12" v-if="show">
<pre class=" language-html code-toolbar"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text-complete</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text-complete</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">import</span> TextComplete <span class="token keyword">from</span> <span class="token string">'v-textcomplete'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token punctuation">:</span> <span class="token punctuation">{</span> TextComplete <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      content<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code><div class="toolbar"></div></pre>
        </div>
        <div class="box-footer" @click="showCode">
          {{ show ? 'Hide Code' : 'Show Code' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { default as githubEmoji } from '../../src/github_emoji'
import TextComplete from '../../src/TextComplete'

export default {
  components: { TextComplete },
  data() {
    return {
      show: false,
      content: ':+1: :100:',
      strategies: [{
        match: /(^|\s):([a-z0-9+\-\_]*)$/,
        search(term, callback) {
          callback(Object.keys(githubEmoji).filter(function (name) {
            return name.startsWith(term);
          }).slice(0, 10))
        },
        template(name) {
          return '<img width="17" src="' + githubEmoji[name] + '"></img> ' + name;
        },
        replace(value) {
          return '$1:' + value + ': '
        },
      },{
        match: /(^|\s)@([a-z0-9+\-\_]*)$/,
        template(name) {
          return '<span class="m-2">' + name + '</span>'
        },
        search(item, callback) {},
        replace(value) {
          return '$1' + value + ' '
        },
        list: [ '@Jiajian', '@Overtrue', '@Jelly', '@Mike' ],
      }]
    }
  },
  methods: {
    showCode() {
      this.show = !this.show
    }
  }
}
</script>
