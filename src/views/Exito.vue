<template>
  <div class="container text-center">
    <h1>
      Compra procesada con éxito
    </h1>
    <p class="my-5">
      Gracias por comprar en <strong>Colo-Colo Store</strong>. <br />
      Puedes hacer el seguimiento de tu compra con el siguiente código:
      <br />
      <br />
      <code class="h5">#8949850FECC</code>
    </p>

    <button class="btn btn-danger">
      <router-link to="/">Volver a Home</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Exito",
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>
