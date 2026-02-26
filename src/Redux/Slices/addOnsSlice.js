const { createSlice } = require('@reduxjs/toolkit');

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState: [],
  reducers: {
    addAddons: (state, action) => {
      state.push({
        id: action?.payload?.id,
        image: action?.payload?.image,
        foodName: action?.payload?.foodName,
        price: action?.payload?.price,
      });
    },
    removeAddons: (state, action) => {
      return state.filter(addon => addon.id !== action.payload.id);
    },
  },
});

export const { addAddons, removeAddons } = addOnsSlice.actions;
export default addOnsSlice.reducer;
