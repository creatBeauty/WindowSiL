const initialState = {
  lengthGlobal: 0,
  widthGlobal: 0,
  thicknessGlobal: 0,
  selectedStoneGlobal: '',
  priceForListGlobal: 0,
  totalPriceGlobal: 0,
  quantitySheetsAfterCuttingGlobal: 0,
  Edge: 1,
  basketItemsGlobal: [], // Пустой массив
  userInfoGlobal: {
    name: '',
    email: '',
    tel: '',
  },
};

// Используем чистое начальное состояние
export const Glstate = { ...initialState };
