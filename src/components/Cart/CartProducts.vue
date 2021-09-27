<template>
  <div class="container">
    <div class="row mt-4 cartproduct">
      <div class="media">
        <img class="mr-3 align-self-start" :src="product.img" />
        <div class="media-body mt-5">
          <div
            class="square"
            :style="{ 'background-color': product.color }"
          ></div>
          <small>
            <i>{{ product.categoria }}</i>
          </small>
          <h5 class="product-name">{{ product.nombre }}</h5>
          <h4>
            ${{
              product.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }}
          </h4>
          <p>
            <strong
              >{{
                product.oferta
                  ? `${product.descuento}% Descuento`
                  : "Sin descuento"
              }}
            </strong>
          </p>

          <p>Cantidad: {{ product.cantidad }}</p>
          <div class="btn-group-horizontal">
            <button
              class="btn btn-outline-danger btn-sm"
              @click="$store.dispatch('cart/addProduct', product)"
            >
              +
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="$store.dispatch('cart/subProduct', product)"
            >
              -
            </button>
          </div>
          <br />
          <small class="text-secondary">
            <strong>
              Subtotal: $
              {{
                (product.cantidad * product.precio)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
              }}</strong
            >
          </small>
          <p>
            <!-- otra forma, más simple de agregar . en unidades de mil  -->
            <strong
              >Total: $
              {{
                parseInt(
                  product.precio *
                    (1 - product.descuento / 100) *
                    product.cantidad
                ).toLocaleString("de-DE")
              }}</strong
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<style scoped>
.cartproduct {
  border-bottom: 1px solid #e7304c !important;
}
</style>
