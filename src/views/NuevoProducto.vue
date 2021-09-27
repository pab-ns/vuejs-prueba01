<template>
  <div>
    <div class="container">
      <h1 class="text-center">Agregar nuevo producto</h1>
      <h6 class="text-center">
        Completa el siguiente formulario para agregar un nuevo producto a la
        tienda. Todos los campos son requeridos
      </h6>
      <br />
      <form @submit.prevent="addNewProduct">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            required
            v-model="product.nombre"
          />
        </div>
        <div class="form-group">
          <label for="categoria">Categoría</label>
          <select
            name="categoria"
            id="categoria"
            class="form-control"
            required
            v-model="product.categoria"
          >
            <option value="" selected disabled> Eliga una opción</option>
            <option value="accesorios">Accesorios</option>
            <option value="bebe">Bebe</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
          </select>
        </div>
        <div class="form-group">
          <label for="imagen">URL de producto</label>
          <input
            type="text"
            class="form-control"
            id="imagen"
            name="imagen"
            required
            v-model="product.img"
          />
        </div>
        <div class="form-group">
          <label for="color">Color</label>
          <select
            name="color"
            id="color"
            class="form-control"
            required
            v-model="product.color"
          >
            <option value="" selected disabled> Eliga un color</option>
            <option value="black">Negro</option>
            <option value="red">Rojo</option>
            <option value="yellow">Amarillo</option>
            <option value="gray">Gris</option>
            <option value="white">Blanco</option>
            <option value="pink">Rosado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="precio">Precio</label>
          <input
            type="number"
            min="3500"
            max="100000"
            class="form-control"
            id="precio"
            name="precio"
            required
            v-model.number="product.precio"
          />
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="oferta"
            v-model="product.oferta"
          />
          <label class="form-check-label" for="oferta">Oferta</label>
        </div>
        <div class="form-group" v-if="product.oferta">
          <label for="descuento">Descuento</label>
          <input
            type="number"
            class="form-control"
            id="descuento"
            name="descuento"
            required
            min="5"
            max="50"
            step="5"
            v-model.number="product.descuento"
          />
        </div>

        <button class="btn btn-danger mt-3" type="submit">
          Agregar Producto
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuevoProducto",
  data: () => ({
    product: {
      nombre: null,
      categoria: null,
      img: "",
      color: null,
      oferta: false,
      descuento: null,
      precio: null,
    },
  }),
  methods: {
    addNewProduct() {
      // console.log({ product: this.product });
      this.$store.dispatch("products/createProduct", { ...this.product });
      this.$router.push("/");
    },
  },
};
</script>

<style>
.form-group,
.form-check-label {
  font-family: "Exo", sans-serif;
  font-weight: 700;
  color: #e7304c;
  text-transform: uppercase;
}
.btn {
  font-family: "Exo", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
