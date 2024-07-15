import { createSlice } from "@reduxjs/toolkit";
const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};
const initialState = {
  products: getBasketFromStorage(),
  drawer : false
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extractedProducts =  state.products &&    state.products.filter((product) => product.id != action.payload.id);
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
        writeFromBasketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
    setDrawer : (state) => {
        state.drawer = !state.drawer
    }
  },
});

export const { addToBasket  , setDrawer} = basketSlice.actions;
export default basketSlice.reducer;
