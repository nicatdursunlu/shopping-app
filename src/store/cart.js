const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const MODULE_NAME = "data";
export const getProducts = (state) => state[MODULE_NAME].products;
export const getCartProducts = (state) => state[MODULE_NAME].cartProducts;

const initialState = {
  products: [{
    id: 1,
    name: "Chicken - Wieners",
    price: 22,
    color: "#449c6d",
    image: "https://robohash.org/harumsapientequi.png?size=50x50&set=set1",
    desc: "Fully-configurable explicit conglomeration"
  }, {
    id: 2,
    name: "Wine - Pinot Noir Stoneleigh",
    price: 82,
    color: "#64fb04",
    image: "https://robohash.org/cumverovoluptatibus.bmp?size=50x50&set=set1",
    desc: "Polarised interactive artificial intelligence"
  }, {
    id: 3,
    name: "Scallop - St. Jaques",
    price: 73,
    color: "#2b10d8",
    image: "https://robohash.org/eosrerumquia.png?size=50x50&set=set1",
    desc: "Polarised leading edge infrastructure"
  }, {
    id: 4,
    name: "Appetizer - Mango Chevre",
    price: 21,
    color: "#7652ef",
    image: "https://robohash.org/estquaeratdolorem.jpg?size=50x50&set=set1",
    desc: "Object-based zero defect budgetary management"
  }, {
    id: 5,
    name: "Beef - Top Sirloin",
    price: 57,
    color: "#6ca2d6",
    image: "https://robohash.org/beataeremqui.png?size=50x50&set=set1",
    desc: "Robust hybrid initiative"
  }, {
    id: 6,
    name: "Southern Comfort",
    price: 90,
    color: "#df9357",
    image: "https://robohash.org/itaquefaciliseius.png?size=50x50&set=set1",
    desc: "Reduced multi-tasking application"
  }, {
    id: 7,
    name: "Juice - Ocean Spray Cranberry",
    price: 43,
    color: "#067917",
    image: "https://robohash.org/commodiaperiamexpedita.png?size=50x50&set=set1",
    desc: "Proactive actuating architecture"
  }, {
    id: 8,
    name: "Corn Shoots",
    price: 10,
    color: "#9e4f9b",
    image: "https://robohash.org/itaquebeataeet.jpg?size=50x50&set=set1",
    desc: "Compatible even-keeled website"
  }, {
    id: 9,
    name: "Doilies - 12, Paper",
    price: 55,
    color: "#39a619",
    image: "https://robohash.org/autessealiquid.bmp?size=50x50&set=set1",
    desc: "Monitored client-driven portal"
  }, {
    id: 10,
    name: "Oil - Sunflower",
    price: 16,
    color: "#50387d",
    image: "https://robohash.org/autharumquo.jpg?size=50x50&set=set1",
    desc: "Cloned demand-driven migration"
  },
  ],
  cartProducts: {},
}

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let card = state.cartProducts;
      if (card[payload.id]) {
        card[payload.id].qty += 1
      } else {
        card[payload.id] = payload;
        card[payload.id].qty = 1;
      }
      return {
        ...state,
        cartProducts: card,
      };

    case REMOVE_FROM_CART:
      let _cartProducts = state.cartProducts;
      delete _cartProducts[payload.id]
      return {
        ...state,
        cartProducts: _cartProducts,
      };
    default:
      return state;
  }
}

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});