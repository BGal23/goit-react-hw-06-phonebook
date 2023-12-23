import PropTypes from 'prop-types';

const ElementsList = ({ persons, filter, delateContact }) => {
  const list = persons
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .map(contact => (
      <li key={contact.id}>
        {contact.name} {contact.number}{' '}
        <button type="button" onClick={() => delateContact(contact.id)}>
          Delete
        </button>
      </li>
    ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default ElementsList;

ElementsList.propTypes = {
  person: PropTypes.array,
  delateContact: PropTypes.func,
  filter: PropTypes.string,
};
