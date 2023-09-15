import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const filtered = useSelector(selectFilteredContacts);
  return (
    <ContactListStyled>
      {filtered.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ContactListStyled>
  );
}
