import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCards, fetchCardById, fetchAddCard, fetchDeleteCard, fetchUpdateCard } from "../../services/api";
import { handleError } from "../../helpers/errorhandler";

// Rewrite to the then().catch() syntax
// Put the error to the store

export const fetchAllCards = createAsyncThunk("cards/fetchAllCards", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchCards();
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const fetchCard = createAsyncThunk("cards/fetchCard", async (id, { rejectWithValue }) => {
  try {
    const data = await fetchCardById(id);
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const addCard = createAsyncThunk("cards/addCard", async (item, { rejectWithValue }) => {
  try {
    const data = await fetchAddCard(item);
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const deleteCard = createAsyncThunk("cards/deleteCard", async (id, { rejectWithValue }) => {
  try {
    const data = await fetchDeleteCard(id);
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const updateCard = createAsyncThunk("cards/updateCard", async ({ id, item }, { rejectWithValue, dispatch }) => {
  try {
    const data = await fetchUpdateCard(id, item);
    await dispatch(fetchCard(id));
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});
