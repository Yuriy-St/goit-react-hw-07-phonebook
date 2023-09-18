import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';

export default function App() {
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
