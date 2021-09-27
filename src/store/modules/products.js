export const productsModule = {
  namespaced: true,
  state: {
    allProducts: [
      {
        id: 1,
        nombre: "Jockey Snapback",
        categoria: "Accesorios",
        img:
          "https://tienda.colocolo.cl/2673-home_default/gorro-colo-colo-mitchell-ness-modelo-19246-sangre-mapuche.jpg",
        color: "black",
        oferta: true,
        descuento: 30,
        precio: 19990,
        stock: 5,
      },
      {
        id: 2,
        nombre: "Jockey Snapback MVP '47",
        categoria: "Accesorios",
        img:
          "https://tienda.colocolo.cl/7437-home_default/colo-colo-oficial-47-mvp-snapback-rojo.jpg",
        color: "red",
        oferta: false,
        descuento: 0,
        precio: 29990,
        stock: 10,
      },
      {
        id: 3,
        nombre: "Body Arquero",
        categoria: "Bebe",
        img:
          "https://tienda.colocolo.cl/7150-home_default/body-arquero-manga-larga.jpg",
        color: "yellow",
        oferta: true,
        descuento: 25,
        precio: 12990,
        stock: 8,
      },
      {
        id: 4,
        nombre: "Corbata Gris",
        categoria: "Accesorios",
        img:
          "https://tienda.colocolo.cl/4096-home_default/corbata-colo-colo-logos-grises-8cm.jpg",
        color: "gray",
        oferta: false,
        descuento: 0,
        precio: 14990,
        stock: 0,
      },
      {
        id: 5,
        nombre: "Camiseta local Mujer",
        categoria: "Mujer",
        img:
          "https://tienda.colocolo.cl/9243-home_default/camiseta-colo-colo-local-mujer.jpg",
        color: "white",
        oferta: true,
        descuento: 10,
        precio: 44990,
        stock: 34,
      },
      {
        id: 6,
        nombre: "Babero Rosa",
        categoria: "Bebe",
        img:
          "https://tienda.colocolo.cl/7117-home_default/babero-trama-rosa.jpg",
        color: "pink",
        oferta: false,
        descuento: 0,
        precio: 4590,
        stock: 50,
      },
      {
        id: 7,
        nombre: "Camiseta visita Mujer",
        categoria: "Mujer",
        img:
          "https://tienda.colocolo.cl/7976-home_default/camiseta-entrenamiento-nino.jpg",
        color: "black",
        oferta: false,
        descuento: 0,
        precio: 49990,
        stock: 25,
      },
      {
        id: 8,
        nombre: "Camiseta Arquero",
        categoria: "Hombre",
        img:
          "https://tienda.colocolo.cl/9258-home_default/camiseta-arquero.jpg",
        color: "yellow",
        oferta: false,
        descuento: 0,
        precio: 50000,
        stock: 15,
      },
      {
        id: 9,
        nombre: "Polerón entrenamiento",
        categoria: "Hombre",
        img:
          "https://tienda.colocolo.cl/9281-home_default/poleron-entrenamiento-colo-colo.jpg",
        color: "black",
        oferta: true,
        descuento: 5,
        precio: 45990,
        stock: 0,
      },
    ],
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.allProducts.push(newProduct);
    },
    SUBS_STOCK(state, productID) {
      state.allProducts[productID].stock--;
    },
  },
  actions: {
    createProduct(context, product) {
      context.commit("ADD_PRODUCT", product);
    },

    subStock(context, productStock) {
      // encontrar indice del juego
      let productID = context.state.allProducts.findIndex(
        (product) => product.id === productStock.id
      );
      if (context.state.allProducts[productID].stock > 0) {
        context.commit("SUBS_STOCK", productID);
      }
    },
  },
};
