<template>
  <div>
    <h1 class="text-center">
      Carro de Compras
    </h1>
    <p class="text-center">
      Aquí están tus productos. Revisa tu pedido antes de confirmar la compra
    </p>

    <CartProduct
      v-for="(product, $index) in $store.state.cart.allProductsCart"
      :key="$index"
      :product="product"
    />

    <div class="row my-5">
      <div class="col-12 text-center">
        <h4>
          <strong> Total: ${{ $store.getters["cart/cartTotal"] }}</strong>
        </h4>
        <button class="btn btn-danger text-uppercase" @click="btnBuyCart">
          Ir al Checkout
        </button>
      </div>
    </div>

    <!-- <pre>{{ $store.state.cart.allProductsCart }}</pre> -->
  </div>
</template>

<script>
import CartProduct from "../components/Cart/CartProducts.vue";
export default {
  name: "CarroCompras",
  components: { CartProduct },
  methods: {
    async btnBuyCart() {
      await this.$store.dispatch("cart/buyCart");
      alert("Compra procesada");
      this.$router.push("/exito");
    },
  },
};
</script>

<style></style>
