import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import useFilteredContacts from 'hooks/useFilteredContacts';

export default function ContactList() {
  const filtered = useFilteredContacts();
  return (
    <ContactListStyled>
      {filtered.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ContactListStyled>
  );
}
