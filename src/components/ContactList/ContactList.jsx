import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import {
  selectContactsError,
  selectContactsStatus,
  selectFilteredContacts,
} from 'redux/selectors';
import { useSelector } from 'react-redux';
import { STATUS } from 'redux/constants';

export default function ContactList() {
  const status = useSelector(selectContactsStatus);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (status === STATUS.pending) return <div>Loading...</div>;

  if (status === STATUS.complete) {
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

  if (status === STATUS.failed) return <div>{error.message}</div>;
}
