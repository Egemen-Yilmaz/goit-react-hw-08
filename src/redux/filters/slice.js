import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu
// Filtre için başlangıç state'i boş bir string olmalı
const initialState = {
  name: '', // Arama filtresi için değer
};

// Filters slice'ı oluşturuluyor
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // changeFilter reducer'ı
    // name alanını günceller
    // action.payload = yeni filtre değeri (string)
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creator'ı dışa aktarıyoruz
export const { changeFilter } = filtersSlice.actions;

// Selector fonksiyonu - State'ten filtre değerini alır
export const selectNameFilter = (state) => state.filters.name;

// Reducer'ı default export olarak dışa aktarıyoruz
export default filtersSlice.reducer;
