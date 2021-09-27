<template>
  <div>
    <img
      src="../assets/img/screencapture-store-colocolo-cl-2019-10-30-11_18_07.jpg"
      class="w-100"
      alt=""
    />

    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 my-3"
          v-for="(product, $index) in $store.state.products.allProducts"
          :key="$index"
        >
          <ProductCard :productprops="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/Products/productCard.vue";
export default {
  name: "Inicio",
  components: { ProductCard },
};
</script>

<style scoped></style>
