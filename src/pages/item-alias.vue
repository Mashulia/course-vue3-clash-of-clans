<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.desc">
      <h1 style="color: #ffffff" class="title">{{ item.title }}</h1>
      <p>{{ item.desc }}</p>
      <div class="card-stats">
      <div class="one-third" v-for="(stat, index) in item.info" :key="index">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat">{{ stat.title }}</div>
      </div>
    </div>
    <br>
    <div>
      <router-link to="/" class="btn btnPrimary"> Back to home</router-link>
    </div>
  </div>
  </div>
</template>
<script>
import items from "@/seeders/items";

export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    this.item = items.find(el => el.alias === alias)
  }
}
</script>
<style scoped lang="scss">
.wrapper-person {
  text-align: center;
}
.card-stats {
  border-radius: 14px;
  margin: 20px 0;
}
</style>
