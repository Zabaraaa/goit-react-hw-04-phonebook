import React from "react";
import { Formik } from 'formik';
import { Form, Label, Field, ErrorMessage, Btn, ContainerBtn } from './contactForm.styled'
import { ContactSchema} from 'components/Utils/validate.js';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
        name: '',
        number: '',
            }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
            onSubmit({ ...values, id: nanoid() }, {actions})
            actions.resetForm();
      }}
        >
            <Form>
                <Label>
                    Name
                    <Field
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
                    />
                    <ErrorMessage name="name" component='div' />
                </Label>
    
                <Label>
                    Number
                    <Field
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        
                    />
                    <ErrorMessage name="number" component='div' />
                </Label>
    <ContainerBtn>
            <Btn type="submit">Add to contact</Btn>
    </ContainerBtn>
    
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};