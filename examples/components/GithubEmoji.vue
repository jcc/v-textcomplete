<template>
  <div class="row">
    <div class="example">
      <h5>Github Emoji Complete</h5>
      <div class="example-box">
        <div class="box-left col-md-6">
          <text-complete v-model="content" areaClass="textcomplete" :strategies="strategies"></text-complete>
        </div>
        <div class="box-right col-md-12" v-if="show">
<pre class=" language-html code-toolbar"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text-complete</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">areaClass</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>textcomplete<span class="token punctuation">"</span></span> <span class="token attr-name">:strategies</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>strategies<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text-complete</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> githubEmoji <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./github_emoji'</span>
<span class="token keyword">import</span> TextComplete <span class="token keyword">from</span> <span class="token string">'v-textcomplete'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token punctuation">:</span> <span class="token punctuation">{</span> TextComplete <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      content<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      strategies<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        match<span class="token punctuation">:</span> <span class="token regex">/(^|\s):([a-z0-9+\-\_]*)$/</span><span class="token punctuation">,</span>
        <span class="token function">search</span><span class="token punctuation">(</span>term<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>githubEmoji<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>term<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">template</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">'&lt;img width="17" src="'</span> <span class="token operator">+</span> githubEmoji<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'"&gt;&lt;/img&gt; '</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">replace</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">'$1:'</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">': '</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
import { default as githubEmoji } from '../../src/github_emoji'
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
