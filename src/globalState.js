const initialState = {
  lengthGlobal: 0,
  widthGlobal: 0,
  thicknessGlobal: 0,
  selectedStoneGlobal: null,
  priceForListGlobal: 0,
  totalPriceGlobal: 0,
  quantitySheetsAfterCuttingGlobal: 0,
  basketItemsGlobal: [], // Пустой массив
  userInfoGlobal: {
    name: '',
    email: '',
    tel: '',
  },
};

// Используем чистое начальное состояние
export const Glstate = { ...initialState };
