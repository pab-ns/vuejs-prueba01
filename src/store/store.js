import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// importar modulos
import { cartModule } from "./modules/cart";
import { productsModule } from "./modules/products";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule,
  },
});
