<template>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <vue-card
          :imgUrl="item.img"
          :name="`${item.lvl}lvl`"
          :title="item.title"
          :link="`/${item.alias}`">
          <template v-slot:body>
            <h1>{{item.desc}}</h1>
          </template>
          <template v-slot:footer>
            <card-stats :item="item"/>
          </template>
        </vue-card>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

</template>
<script>
import 'vue3-carousel/dist/carousel.css';

import { Carousel, Slide, Navigation } from 'vue3-carousel'

import VueCard from "@/components/UI/vue-card";

import items from "@/seeders/items.js"
import CardStats from "@/components/UI/card-stats";

export default {
  components: {
    CardStats,
    Carousel,
    Slide,
    Navigation,
    VueCard
  },
  data() {
    return {
      items: items,
      settings:{
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints:{
        300:{
          itemsToShow: 1
        },
        700:{
          itemsToShow: 2
        }
      }
    }
  }
}
</script>
