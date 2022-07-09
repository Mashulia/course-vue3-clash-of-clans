<template>
  <div class="card">
    <div class="card-img__wrapper" v-if="imgUrl">
      <img class="card-img" :src="imgUrl" :alt="name">
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot name="body"></slot>
      <router-link class="link" style="display: block; margin: 20px 0" v-if="link" :to="link">See more</router-link>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>
