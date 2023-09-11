import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
      </div>

      <div>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {contacts?.length ? <ContactList /> : null}
      </div>
    </Container>
  );
}
