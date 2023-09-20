import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
      </div>

      <div>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
