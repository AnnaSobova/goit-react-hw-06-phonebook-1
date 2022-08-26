import Phonebook from './Phonebook/Phonebook';
import Main from './Main/Main';
import Contacts from './Phonebook/Contacts/Contacts';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Main title="Phonebook">
      <Phonebook />
      {contacts.length > 0 ? (
        <Contacts name="Contacts" />
      ) : (
        <p>Phonebook empty</p>
      )}
    </Main>
  );
};

export default App;
