import PropTypes from 'prop-types';

const Filter = ({ filtered }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={filtered} />
      <br />
    </>
  );
};

export default Filter;

Filter.propsTypes = {
  filtered: PropTypes.func,
};
