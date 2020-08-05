<template>
  <div>
    <soundPlayer></soundPlayer>
    <soundAction></soundAction>
    <soundTab></soundTab>
  </div>
</template>

<script>
import soundAction from '../components/sound/soundAction'
import soundPlayer from '../components/sound/soundPlayer'
import soundTab from '../components/sound/soundTab'
export default {
  name: 'sound',
  components: {
    soundPlayer,
    soundAction,
    soundTab
  }
}
</script>

<style>
</style>>
