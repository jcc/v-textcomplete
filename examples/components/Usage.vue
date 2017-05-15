<template>
  <div class="row">
    <div class="blocks">
      <h3 class="text-center mt-4">How to use</h3>
      <div class="block">
        <github-emoji-complete></github-emoji-complete>
        <emojione-complete></emojione-complete>
        <mention-name></mention-name>
        <custom-event></custom-event>
      </div>
    </div>
  </div>
</template>

<script>
import GithubEmojiComplete from './GithubEmoji'
import EmojioneComplete from './EmojioneComplete'
import MentionName from './MentionName'
import CustomEvent from './CustomEvent'

export default {
  components: {
    GithubEmojiComplete,
    EmojioneComplete,
    MentionName,
    CustomEvent,
  }
}
</script>
