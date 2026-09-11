export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsLoadingMore = (state) => state.campers.isLoadingMore;
export const selectError = (state) => state.campers.error;
export const selectHasMore = (state) =>
  state.campers.items.length < state.campers.total;

export const selectCurrentCamper = (state) => state.campers.current;
export const selectCurrentLoading = (state) => state.campers.currentLoading;
export const selectCurrentError = (state) => state.campers.currentError;
