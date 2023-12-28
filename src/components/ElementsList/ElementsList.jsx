import ElementItem from '../ElementItem/ElementItem';
import { getContacts, getFiltersStatus } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const filterContact = (contacts, filterStatus) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );
};

const ElementsList = () => {
  const contacts = useSelector(getContacts);
  const filterStatus = useSelector(getFiltersStatus);
  const filter = filterContact(contacts, filterStatus);

  const list = filter.map(contact => (
    <ElementItem key={contact.id} contact={contact} />
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default ElementsList;
