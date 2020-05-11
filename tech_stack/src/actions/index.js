export const selectLibrary = (libraryId) => {
  console.log('select library');
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
