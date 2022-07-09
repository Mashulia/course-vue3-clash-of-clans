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
            <div class="card-stats">
              <div class="one-third" v-for="(stat, index) in item.info" :key="index">
                <div class="stat-value">{{stat.value}}</div>
                <div class="stat">{{stat.title}}</div>
              </div>
            </div>
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

export default {
  components: {
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
