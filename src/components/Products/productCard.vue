<template>
  <div class="card" style="width: 20rem;">
    <img
      class="card-img-top img-thumbnail"
      :src="productprops.img"
      alt="Card image cap"
    />
    <div class="card-body">
      <div
        class="square"
        :style="{ 'background-color': productprops.color }"
      ></div>
      <small>
        <i>{{ productprops.categoria }}</i>
      </small>
      <h5 class="product-name">{{ productprops.nombre }}</h5>
      <h4>
        ${{
          productprops.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }}
      </h4>
      <p>
        <strong
          >{{
            productprops.oferta
              ? `${productprops.descuento}% Descuento`
              : "Sin descuento"
          }}
        </strong>
      </p>
      <p>Stock: {{ productprops.stock }}</p>
    </div>
    <button
      class="btn btn-danger"
      @click="addProductToCart"
      :disabled="productprops.stock <= 0"
    >
      Comprar
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productprops: { type: Object, required: true },
  },
  methods: {
    addProductToCart() {
      // console.log({ product: this.productprops });
      this.$store.dispatch("cart/addProduct", this.productprops);
      this.$store.dispatch("products/subStock", this.productprops);
    },
  },
};
</script>

<style>
.img-thumbnail {
  border: none;
}

.card {
  /* border: 1px solid #878787; */
  border: none;
  border-radius: 0;
  -webkit-box-shadow: 5px 12px 12px rgb(0 0 0 / 10%);
  box-shadow: 5px 12px 12px rgb(0 0 0 / 10%);
  box-shadow: 0px 3px 15px rgb(0 0 0 / 10%);
}

.product-name {
  font-family: "Exo", sans-serif;
  font-weight: 500;
  color: #e7304c;
}

.square {
  width: 1rem;
  height: 1rem;
  border: 1px solid #878787;
  margin-bottom: 5%;
}
</style>

<style scoped></style>
