export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  if (items.length === 0) {
    return;
  }
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
