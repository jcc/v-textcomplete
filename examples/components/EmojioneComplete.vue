<template>
  <div class="row">
    <div class="example">
      <h5>Emojione Complete</h5>
      <div class="example-box">
        <div class="box-left col-md-6">
          <text-complete v-model="content" areaClass="textcomplete" :strategies="strategies"></text-complete>
        </div>
        <div class="box-right col-md-12" v-if="show">
<pre class=" language-html code-toolbar"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text-complete</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">areaClass</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>textcomplete<span class="token punctuation">"</span></span> <span class="token attr-name">:strategies</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>strategies<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text-complete</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">import</span> Emojione <span class="token keyword">from</span> <span class="token string">'emojione'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> emojiStrategy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./src/emoji_strategy'</span>
<span class="token keyword">import</span> TextComplete <span class="token keyword">from</span> <span class="token string">'v-textcomplete'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token punctuation">:</span> <span class="token punctuation">{</span> TextComplete <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      content<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      strategies<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        match<span class="token punctuation">:</span> <span class="token regex">/(^|\s):([a-z0-9+\-\_]*)$/</span><span class="token punctuation">,</span>
        <span class="token function">search</span><span class="token punctuation">(</span>term<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

          <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> emojiStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>emojiStrategy<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">.</span>shortname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">':'</span> <span class="token operator">+</span> term<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> list<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>emojiStrategy<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">.</span>shortname<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>

          <span class="token function">callback</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">template</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">'&lt;span&gt;'</span> <span class="token operator">+</span> Emojione<span class="token punctuation">.</span><span class="token function">shortnameToUnicode</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'&lt;small&gt;'</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">'&lt;/small&gt;&lt;/span&gt;'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">replace</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">'$1'</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">' '</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        list<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">':tada:'</span><span class="token punctuation">,</span> <span class="token string">':heart:'</span><span class="token punctuation">,</span> <span class="token string">':100:'</span><span class="token punctuation">,</span> <span class="token string">':+1:'</span><span class="token punctuation">,</span> <span class="token string">':-1:'</span><span class="token punctuation">,</span> <span class="token string">':1234:'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
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
import Emojione from 'emojione'
import { default as emojiStrategy } from '../../src/emoji_strategy'
import TextComplete from '../../src/TextComplete'

export default {
  components: { TextComplete },
  data() {
    return {
      show: false,
      content: '',
      strategies: [{
        match: /(^|\s):([a-z0-9+\-\_]*)$/,
        search(term, callback) {
          let list = []

          for(let item in emojiStrategy) {
            if(emojiStrategy[item].shortname.startsWith(':' + term) && list.length < 8) {
              list.push(emojiStrategy[item].shortname)
            }
          }

          callback(list)
        },
        template(name) {
          return '<span>' + Emojione.shortnameToUnicode(name) + '<small>' + name + '</small></span>'
        },
        replace(value) {
          return '$1' + value + ' '
        },
        list: [ ':tada:', ':heart:', ':100:', ':+1:', ':-1:', ':1234:' ],
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
