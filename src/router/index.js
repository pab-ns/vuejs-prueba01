import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Ruta "Pivote" (cuando no hay nada)
  // {
  //   path: "",
  //   redirect: "/",
  // },
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/Inicio.vue"),
    alias: ["/home", "/portada", "/inicio"],
  },
  {
    path: "/nuevo-producto",
    name: "NuevoProducto",
    alias: ["/agregar", "/agregar-producto"],
    component: () => import("../views/NuevoProducto.vue"),
  },
  {
    path: "/carro",
    name: "CarroCompras",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/exito",
    name: "Exito",
    component: () => import("../views/Exito.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
