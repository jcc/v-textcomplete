<p align="center">
<img src="https://pigjian.com/images/v-textcomplete.png" alt="Powered By Jiajian Chan" width="160">
</p>

<p align="center">A easy-to-use text complete component made with Vue.js.</p>

# V - Textcomplete

Here is [documents](https://textcomplete.iline.co/)

## Installation

```javascript
npm install v-textcomplete --save
```

Or

```javascript
yarn add v-textcomplete --save
```

## Usage

**Register component**

Registe global component:

```javascript
import TextComplete from 'v-textcomplete'

Vue.component('text-complete', TextComplete)
```

Registe component:

```javascript
import TextComplete from 'v-textcomplete'

export default {
  components: { TextComplete }
}
```

**Simple usage**

```javascript
<template>
  <text-complete v-model="content" areaClass="textcomplete" :strategies="strategies"></text-complete>
</template>

<script>
import { default as githubEmoji } from './github_emoji'
import TextComplete from 'v-textcomplete'

export default {
  components: { TextComplete },
  data() {
    return {
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
  }
}
</script>
```

> Please check the [Documentation](https://textcomplete.iline.co/) more

## Contributors

- [Jiajian Chan](http://github.com/jcc)

## Thanks

- [Textcomplete](https://github.com/yuku-t/textcomplete)
- [Element UI](https://github.com/ElemeFE/element)

## License

The plugin is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
