import React from 'react';
import PropTypes from 'prop-types';

import FormAddTodoContainer from '../../containers/FormAddTodoContainer';
import FormEditTodoContainer from '../../containers/FormEditTodoContainer';
import FormTodoContainer from '../../containers/FormTodoContainer';

import './content.css';

const contentPropTypes = {
    className: PropTypes.string,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      }).isRequired,
    ).isRequired,
    editingTodo: PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string,
      completed: PropTypes.bool,
    }).isRequired,
  };
  
  const Content = props => {
      console.log(props.todos)
    return (
      <div className={props.className}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-8 col-xl-8">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Welcome!</h5>
                  <p className="card-text">To get started, add some todos to your list:</p>
                  <div className="d-inline-block">
                    <FormAddTodoContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {props.todos.length ? (
            <div className="row justify-content-center">
              <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                <div className="content__todos">
                  <ul className="list-group content__todos__ul">
                  {props.todos.map((todo, index) => (
                    <div
                        className="content__todos__li">
                        {props.editingTodo.id === todo.id ? (
                            <FormEditTodoContainer todo={todo} />
                        ) : (
                            <FormTodoContainer todo={todo} />
                        )}
                    </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
  
  Content.propTypes = contentPropTypes;
  
  export default Content;
  