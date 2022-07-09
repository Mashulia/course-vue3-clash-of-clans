<template>
  <div class="wrapper">
    <TheHeader/>
    <div class="wrapper-content">
      <div class="view-sm isCenter">
        <div class="container">
        </div>
        <router-view/>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/the-header'
import TheFooter from '@/components/the-footer'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
