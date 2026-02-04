import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

// Başlangıç durumu - Sadece contacts için!
// İletişimler için başlangıç state'i boş bir dizi olmalı
const initialState = {
  items: [], // Tüm iletişimler burada saklanacak
  loading: false, // Yükleme durumu
  error: null, // Hata durumu
};

// createSlice şunları içerir:
// - name: slice'ın adı (örnek: 'contacts')
// - initialState: yukarıda tanımladığınız başlangıç state
// - reducers: state'i değiştiren fonksiyonlar
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(
                    contact => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Selector fonksiyonu - State'ten contacts listesini alır
// state.contacts Redux store'daki contacts slice'ı
// state.contacts.items ise içindeki items dizisi
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) =>
        contacts.filter(contact =>
            contact.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
);

// Reducer'ı default export olarak dışa aktarıyoruz
// Bu, store.js'te kullanılacak
export default contactsSlice.reducer;
