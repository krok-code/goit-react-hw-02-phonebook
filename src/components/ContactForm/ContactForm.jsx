import { Formik } from 'formik';
import { nanoid } from 'nanoid';

// import { BsFillPersonFill } from 'react-icons/bs';
// import { GiSmartphone } from 'react-icons/gi';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const contact = {
      id: nanoid(),
      ...values,
    };
    onSubmit(contact);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      {props => {
        return (
          <form>
            <div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  placeholder="Primarh93"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <label htmlFor="number">Number</label>
                <input
                  id="number"
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  placeholder="+38 000 000 00 00"
                  value={props.values.number}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <button type="submit">Add contact</button>
          </form>
        );
      }}
    </Formik>
  );
};
