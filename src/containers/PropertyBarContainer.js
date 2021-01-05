import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PropertyBar from '../components/PropertyBar/PropertyBar';

import { DeleteTodo } from '../actions/DeleteTodo';
import { SelectEditTodo } from '../actions/SelectEditTodo';

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleSelectEditTodo: PropTypes.func.isRequired,
};

const PropertyBarContainer = props => <PropertyBar {...props} />;

PropertyBarContainer.propTypes = propertyBarPropTypes;

const mapDispatchToProps = {
  handleDeleteTodo: DeleteTodo,
  handleSelectEditTodo: SelectEditTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(PropertyBarContainer);
