<template>
  <div class="home">
   <carousel />
   <products />
  </div>
</template>

<script>
import carousel from "@/components/carousel.vue";
import products from "@/components/products.vue";
export default {
  name: "Home",
  components: {
    carousel,
    products,
  },
};
</script>

