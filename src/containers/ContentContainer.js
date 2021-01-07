import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Content from '../components/Content/Content';

const contentPropTypes = {
  className: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  editingTodo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

const ContentContainer = props => <Content {...props} />;

ContentContainer.propTypes = contentPropTypes;

const mapStateToProps = state => ({
  todos: state.todos,
  editingTodo: state.editingTodo,
});


export default connect(
  mapStateToProps,
)(ContentContainer);
