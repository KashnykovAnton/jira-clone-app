import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCards, fetchCard, addCard, deleteCard, updateCard } from "./cards-thunks";
import {
  handleFetchAllCards,
  handleFetchCard,
  handleAddCard,
  handleDeleteCard,
  handleUpdateCard,
  handlePending,
  handleRejected,
} from "./cards-functions";

const initialState = {
  cards: [],
  singleCard: {},
  isLoading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCards.fulfilled, handleFetchAllCards)
      .addCase(fetchCard.fulfilled, handleFetchCard)
      .addCase(addCard.fulfilled, handleAddCard)
      .addCase(deleteCard.fulfilled, handleDeleteCard)
      .addCase(updateCard.fulfilled, handleUpdateCard)
      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export const cardsSliceReducer = cardsSlice.reducer;
