<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.desc">
      <h1 style="color: #ffffff" class="title">{{ item.title }}</h1>
      <p>{{ item.desc }}</p>
      <card-stats :item="item"/>
    <br>
    <div>
      <router-link to="/" class="btn btnPrimary"> Back to home</router-link>
    </div>
  </div>
  </div>
</template>
<script>
import {site} from "@/_config";
import items from "@/seeders/items";
import CardStats from "@/components/UI/card-stats";

export default {
  components: {CardStats},
  data() {
    return {
      item: null
    }
  },
  mounted(){
    this.identifyItem()
  },
  methods:{
    identifyItem(){
      const alias = this.$route.params.itemAlias
      const item = items.find(el => el.alias === alias)
      if (item) {
        this.item = item;
        document.title = `${site.title} - ${item.title}`;
      } else {
        this.$router.push('/404')
      }
    }
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
