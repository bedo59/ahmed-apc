<template>
  <div class="home">
   <carousel />
   <products />
   <endd />
  </div>
</template>

<script>
import carousel from "@/components/carousel.vue";
import products from "@/components/products.vue";
import endd from "@/components/endd.vue";
export default {
  name: "Home",
  components: {
    carousel,
    products,
    endd,
  },
};
</script>

