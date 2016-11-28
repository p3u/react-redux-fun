export function selectBook(book) {
  // Action creator returns actions
  // Represented by an object with a type property
  return {
  type: 'BOOK_SELECTED',
  payload: book
};
}
