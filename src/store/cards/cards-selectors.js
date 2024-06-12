import { createSelector } from "reselect";

// cards selectors
export const selectCards = (state) => state.cards.cards;
export const selectLoader = (state) => state.cards.isLoading;
export const selectSingleCard = (state) => state.cards.singleCard;
export const selectGroups = createSelector([selectCards], (cards) => {
  const groupsArr = [];
  cards.forEach((card) => {
    if (!groupsArr.includes(card.group)) {
      groupsArr.push(card.group);
    }
  });
  return groupsArr.sort((a, b) => a.localeCompare(b));
});

// filters selectors
export const selectFilters = (state) => state.filters;

const selectFilteredCards = createSelector([selectCards, selectFilters], (cards, filters) => {
  const { selectedGroup, selectedStatus } = filters;
  return cards.filter((card) => {
    const groupMatch = selectedGroup ? card.group === selectedGroup : true;
    const statusMatch = selectedStatus ? card.status === selectedStatus : true;
    return groupMatch && statusMatch;
  });
});

const importanceLevels = { Low: 1, Medium: 2, High: 3 };

const sortByImportance = createSelector([selectFilters, selectFilteredCards], (filters, cards) => {
  const { selectedSortImportance } = filters;
  if (selectedSortImportance === "") return cards;
  return cards.slice().sort((a, b) => {
    const comparison = importanceLevels[a.importance] - importanceLevels[b.importance];
    return selectedSortImportance === "ascending" ? comparison : -comparison;
  });
});

export const selectFilteredAndSortedCards = createSelector(
  [sortByImportance, selectFilters],
  (sortedByImportanceCards, filters) => {
    const { selectedSortAlphabetically } = filters;
    if (!selectedSortAlphabetically) return sortedByImportanceCards;
    return sortedByImportanceCards.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
);

// rewrite the logic 