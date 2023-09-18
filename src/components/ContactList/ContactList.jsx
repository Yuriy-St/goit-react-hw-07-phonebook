import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useMemo } from 'react';

export default function ContactList() {
  const {
    data: contacts,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    const filterNormalized = filter.toLowerCase();

    const filtered = filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filterNormalized)
        )
      : contacts;

    return filtered || [];
  }, [contacts, filter]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (isSuccess) {
    return (
      <>
        <ContactListStyled>
          {filteredContacts.map(({ id, name, phone }) => (
            <Contact key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactListStyled>
      </>
    );
  }

  if (isError) return <div>{error.message}</div>;
}
