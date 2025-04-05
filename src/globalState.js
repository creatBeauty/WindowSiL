const initialState = {
  length: 0,
  with: 0,
  thickness: 0,
  selectedStone: null,
  priceForList: 0,
  totalPrice: 0,
  quantitySheetsAfterCutting: 0,
  basketItems: [], // Пустой массив
  userInfo: {
    name: '',
    email: '',
    tel: '',
  },
};

// Используем чистое начальное состояние
export const state = { ...initialState };
