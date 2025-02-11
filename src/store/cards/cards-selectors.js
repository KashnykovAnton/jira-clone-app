import { createSelector } from "reselect";
import { importanceLevels } from "../../utils/options";

// cards selectors
export const selectCards = (state) => state.cards.cards;
export const selectLoader = (state) => state.cards.isLoading;
export const selectSingleCard = (state) => state.cards.singleCard;
export const selectGroups = createSelector([selectCards], (cards) => {
  // --- old approach ---
  // const groupsArr = [];
  // cards.forEach((card) => {
  //   if (!groupsArr.includes(card.group)) {
  //     groupsArr.push(card.group);
  //   }
  // });
  // return groupsArr.sort((a, b) => a.localeCompare(b));

  const groups = new Set(cards.map((card) => card.group));
  return Array.from(groups).sort((a, b) => a.localeCompare(b));
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
    const { selectedSortAlphabeticallyAZ, selectedSortAlphabeticallyZA } = filters;

    if (selectedSortAlphabeticallyAZ) {
      return sortedByImportanceCards.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    if (selectedSortAlphabeticallyZA) {
      return sortedByImportanceCards.slice().sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedByImportanceCards;
  }
);
