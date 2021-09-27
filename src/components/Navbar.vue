<template>
  <div>
    <div class="col-12">
      <img src="../assets/img/HEADER-ECOMMERCE.png" alt="" class="img-fluid" />
    </div>
    <!-- navbar -->
    <nav class="navbar-white my-2">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link"> <p>Inicio</p></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/nuevo-producto" class="nav-link"
            ><p>Agregar Producto</p></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/carro" class="nav-link"><p>Carro</p></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.nav-link {
  font-family: "Bebas Neue", cursive;
  color: #e7304c;
  font-size: 1.6rem;
}

.nav-link:hover {
  color: #878787;
}
</style>
