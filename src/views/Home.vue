<template>
  <div class="home">
   <carousel />
   <products />
   <deol />
   <americaa />
  </div>
</template>

<script>
import carousel from "@/components/carousel.vue";
import products from "@/components/products.vue";
import Deol from '../components/deol.vue';
import Americaa from '../components/americaa.vue';
export default {
  name: "Home",
  components: {
    carousel,
    products,
    Deol,
    Americaa,
  },
};
</script>

