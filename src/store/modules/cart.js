// const delay = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });

export const cartModule = {
  namespaced: true,
  state: {
    allProductsCart: [],
  },
  getters: {
    cartTotal(state) {
      return state.allProductsCart.reduce((accumlator, product) => {
        accumlator += Math.round(
          product.precio * (1 - product.descuento / 100) * product.cantidad
        );
        return accumlator;
      }, 0);
    },
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.allProductsCart.push(newProduct);
    },
    ADD_CANTIDAD_PRODUCT(state, productID) {
      state.allProductsCart[productID].cantidad++;
    },
    SUB_CANTIDAD_PRODUCT(state, productID) {
      state.allProductsCart[productID].cantidad--;
    },
    REMOVE_PRODUCT(state, productID) {
      state.allProductsCart.splice(productID, 1);
    },
    CLEAR_CART(state) {
      state.allProductsCart = [];
    },
  },
  actions: {
    addProduct(context, product) {
      // console.log(product);
      const productIDsearch = context.state.allProductsCart.findIndex(
        (productInCart) => productInCart.id === product.id
      );

      // -1 = not found (No 0 pq arreglo empieza de 0)
      if (productIDsearch === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...newProduct } = product;
        context.commit("ADD_PRODUCT", { ...newProduct, cantidad: 1 });
      } else {
        context.commit("ADD_CANTIDAD_PRODUCT", productIDsearch);
      }
    },
    subProduct(context, product) {
      const productIDsearch = context.state.allProductsCart.findIndex(
        (productInCart) => productInCart.id === product.id
      );
      if (productIDsearch >= 0) {
        if (context.state.allProductsCart[productIDsearch].cantidad > 1) {
          context.commit("SUB_CANTIDAD_PRODUCT", productIDsearch);
        } else {
          context.commit("REMOVE_PRODUCT", productIDsearch);
        }
      } else {
        console.error("Error. El producto no existe en el carro");
      }
    },
    buyCart(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("CLEAR_CART");
          resolve();
        }, 2000);
      });
    },
  },
};
