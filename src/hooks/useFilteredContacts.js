import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export default function useFilteredContacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterNormalized = filter.toLowerCase();

  const filtered = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterNormalized)
      )
    : contacts;

  return filtered;
}
