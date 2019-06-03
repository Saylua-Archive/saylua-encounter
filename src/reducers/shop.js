import { createSelector } from 'reselect';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

const PRODUCT_LIST = [
  {"id": 1, "title": "Cabot Creamery Extra Sharp Cheddar Cheese", "price": 10.99, "inventory": 2},
  {"id": 2, "title": "Cowgirl Creamery Mt. Tam Cheese", "price": 29.99, "inventory": 10},
  {"id": 3, "title": "Tillamook Medium Cheddar Cheese", "price": 8.99, "inventory": 5},
  {"id": 4, "title": "Point Reyes Bay Blue Cheese", "price": 24.99, "inventory": 7},
  {"id": 5, "title": "Shepherd's Halloumi Cheese", "price": 11.99, "inventory": 3}
];

export const getAllProducts = () => (dispatch) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back).

  // You could reformat the data in the right format as well.
  const products = PRODUCT_LIST.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {});

  dispatch({
    type: GET_PRODUCTS,
    products
  });
};

export const checkout = () => (dispatch) => {
  // Here you could do things like credit card validation, etc.
  // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
  // by flipping a coin :)
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    dispatch({
      type: CHECKOUT_FAILURE
    });
  } else {
    dispatch({
      type: CHECKOUT_SUCCESS
    });
  }
};

export const addToCart = (productId) => (dispatch, getState) =>{
  const state = getState();
  // Just because the UI thinks you can add this to the cart
  // doesn't mean it's in the inventory (user could've fixed it).
  if (state.shop.products[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};

export const addToCartUnsafe = (productId) => {
  return {
    type: ADD_TO_CART,
    productId
  };
};

const INITIAL_STATE = {
  products: {},
  cart: {},
  error: ''
};

const shop = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        products: products(state.products, action),
        cart: cart(state.cart, action),
        error: ''
      };
    case CHECKOUT_FAILURE:
      return {
        ...state,
        error: 'Checkout failed. Please try again'
      };
    default:
      return state;
  }
};

// Slice reducer: it only reduces the bit of the state it's concerned about.
const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      const productId = action.productId;
      return {
        ...state,
        [productId]: product(state[productId], action)
      };
    default:
      return state;
  }
};

const product = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + 1
      };
    default:
      return state;
  }
};

const cart = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addId = action.productId;
      return {
        ...state,
        [addId]: (state[addId] || 0) + 1
      };
    case REMOVE_FROM_CART:
      const removeId = action.productId;
      const quantity = (state[removeId] || 0) - 1;
      if (quantity <= 0) {
        const newState = {
          ...state
        };
        delete newState[removeId];
        return newState;
      } else {
        return {
          ...state,
          [removeId]: quantity
        }
      }
    case CHECKOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default shop;

// Per Redux best practices, the shop data in our store is structured
// for efficiency (small size and fast updates).
//
// The _selectors_ below transform store data into specific forms that
// are tailored for presentation. Putting this logic here keeps the
// layers of our app loosely coupled and easier to maintain, since
// views don't need to know about the store's internal data structures.
//
// We use a tiny library called `reselect` to create efficient
// selectors. More info: https://github.com/reduxjs/reselect.

const cartSelector = state => state.shop.cart;
const productsSelector = state => state.shop.products;

// Return a flattened array representation of the items in the cart
export const cartItemsSelector = createSelector(
  cartSelector,
  productsSelector,
  (cart, products) => {
    return Object.keys(cart).map(id => {
      const item = products[id];
      return {id: item.id, title: item.title, amount: cart[id], price: item.price};
    });
  }
);

// Return the total cost of the items in the cart
export const cartTotalSelector = createSelector(
  cartSelector,
  productsSelector,
  (cart, products) => {
    let total = 0;
    Object.keys(cart).forEach(id => {
      const item = products[id];
      total += item.price * cart[id];
    });
    return Math.round(total * 100) / 100;
  }
);

// Return the number of items in the cart
export const cartQuantitySelector = createSelector(
  cartSelector,
  cart => {
    let num = 0;
    Object.keys(cart).forEach(id => {
      num += cart[id];
    });
    return num;
  }
);
