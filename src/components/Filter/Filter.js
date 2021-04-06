import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from '../../redux/actions-phone/actions-phone';
import { getFilter } from '../../redux/selector-phone/selector-phone';
import { TextField } from '@material-ui/core';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = event =>
    dispatch(contactActions.changeFilter(event.target.value));
  return (
    <TextField
      label="Find contacts by name"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
