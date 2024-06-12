import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroup: null,
  selectedStatus: null,
  selectedSortImportance: "",
  selectedSortAlphabetically: false,
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
    setSelectedSortAlphabetically(state, { payload }) {
      state.selectedSortAlphabetically = payload;
    },
  },
});

export const { setSelectedGroup, setSelectedStatus, setSelectedSortImportance, setSelectedSortAlphabetically } =
  filtersSlice.actions;
export const filterSliceReducer = filtersSlice.reducer;
