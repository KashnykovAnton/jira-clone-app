export const handleFetchAllCards = (state, { payload }) => {
  state.cards = payload;
  state.isLoading = false;
};

export const handleFetchCard = (state, { payload }) => {
  state.singleCard = payload;
  state.isLoading = false;
};

export const handleAddCard = (state, { payload }) => {
  state.cards = [...state.cards, payload];
  state.isLoading = false;
};

export const handleDeleteCard = (state, { payload }) => {
  state.cards = state.cards.filter((card) => card.id !== payload.id);
  state.isLoading = false;
};

export const handleUpdateCard = (state, { payload }) => {
  state.cards = state.cards.map((card) => (card.id === payload.id ? payload : card));
  state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
