import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('product/getProduct', async() => {
    const response = await axios.get('http://localhost:3004/product');
    return response.data
});

export const saveProduct = createAsyncThunk('product/saveProduct', async({tahun, penjualan, pengeluaran}) => {
    const response = await axios.post('http://localhost:3004/product', {
        tahun,
        penjualan,
        pengeluaran
    });
    return response.data
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async(id) => {
    await axios.delete('http://localhost:3004/product/' + id);
    return id
});


const productEntity = createEntityAdapter({
    selectId : (product) => product.id
})

const productSlice = createSlice({
    name : 'product',
    initialState : productEntity.getInitialState(),
    extraReducers : {
        [getProduct.fulfilled] : (state, action) => {
            productEntity.setAll(state, action.payload);
        },
        [saveProduct.fulfilled] : (state, action) => {
            productEntity.addOne(state, action.payload);
        },
        [deleteProduct.fulfilled] : (state, action) => {
            productEntity.removeOne(state, action.payload);
        },
    }

});

export const productSelectors = productEntity.getSelectors(state => state.product);
export default productSlice.reducer;