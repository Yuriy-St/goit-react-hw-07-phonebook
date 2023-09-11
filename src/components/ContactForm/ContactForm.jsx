import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  ButtonSubmit,
  Input,
  Label,
  StyledForm,
  ValidationMessage,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const isValidContact = name => {
    const isSameContact = contacts.some(contact => contact.name === name);
    if (isSameContact) {
      alert(`${name} is already in contacts!`);
      return false;
    }

    return true;
  };

  const handleSubmit = contact => {
    if (!isValidContact(contact.name)) return;
    dispatch(addContact(contact));
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(contact, { resetForm }) => {
        handleSubmit(contact);
        resetForm();
      }}
    >
      {({ errors }) => (
        <StyledForm>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" />
            {errors.name && (
              <ErrorMessage name="name" component={ValidationMessage} />
            )}
          </div>

          <div>
            <Label htmlFor="number">Number</Label>
            <Input type="text" name="number" />
            {errors.number && (
              <ErrorMessage name="number" component={ValidationMessage} />
            )}
          </div>

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </StyledForm>
      )}
    </Formik>
  );
}
