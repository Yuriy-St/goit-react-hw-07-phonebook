import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  ButtonSubmit,
  Input,
  Label,
  StyledForm,
  ValidationMessage,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
  phone: Yup.string()
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

  const contacts = useSelector(selectContacts);

  const isValidContact = name => {
    const isSameContact = contacts.some(contact => contact.name === name);
    if (isSameContact) {
      alert(`${name} is already in contacts!`);
      return false;
    }

    return true;
  };

  const handleSubmit = ({ name, phone }) => {
    if (!isValidContact(name)) return;
    dispatch(addContact({ name, phone }));
  };

  const initialValues = {
    name: '',
    phone: '',
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
            <Label htmlFor={nameInputId}>Name</Label>
            <Input id={nameInputId} type="text" name="name" />
            {errors.name && (
              <ErrorMessage name="name" component={ValidationMessage} />
            )}
          </div>

          <div>
            <Label htmlFor={numberInputId}>Number</Label>
            <Input id={numberInputId} type="text" name="phone" />
            {errors.number && (
              <ErrorMessage name="phone" component={ValidationMessage} />
            )}
          </div>

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </StyledForm>
      )}
    </Formik>
  );
}
