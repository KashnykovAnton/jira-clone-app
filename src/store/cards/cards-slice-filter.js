import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroup: null,
  selectedStatus: null,
  selectedSortImportance: "",
  selectedSortAlphabeticallyAZ: false,
  selectedSortAlphabeticallyZA: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedGroup(state, { payload }) {
      state.selectedGroup = payload;
    },
    setSelectedStatus(state, { payload }) {
      state.selectedStatus = payload;
    },
    setSelectedSortImportance(state, { payload }) {
      state.selectedSortImportance = payload;
    },
    setSelectedSortAlphabeticallyAZ(state, { payload }) {
      state.selectedSortAlphabeticallyAZ = payload;
    },
    setSelectedSortAlphabeticallyZA(state, { payload }) {
      state.selectedSortAlphabeticallyZA = payload;
    },
  },
});

export const {
  setSelectedGroup,
  setSelectedStatus,
  setSelectedSortImportance,
  setSelectedSortAlphabeticallyAZ,
  setSelectedSortAlphabeticallyZA,
} = filtersSlice.actions;
export const filterSliceReducer = filtersSlice.reducer;
