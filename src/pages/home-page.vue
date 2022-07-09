<template>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <vue-card
      :imgUrl="item.img"
      :name="`${item.lvl}lvl`"
      :title="item.title"
      :link="`/${item.alias}`">
      <h1>{{item.desc}}</h1>
    </vue-card>
  </div>
</template>
<script>
import VueCard from "@/components/UI/vue-card";
import items from "@/seeders/items.js"
export default {
  components: {
    VueCard
  },
  data() {
    return {
      items: items
    }
  }
}
</script>
