import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this); //Se enlazo handleInputChange con el evento
    this.handleSubmit = this.handleSubmit.bind(this); //Se enlazo handleInputChange con el evento
  }

  //(e)=EVENTO

  handleSubmit(e) {
    e.preventDefault();  // evento que evita refrescar la pagina
    this.props.onAddTodo(this.state);
    this.setState({
      title: '', //Datos en blanco al inicio de la app
      responsible: '',
      description: '',
      priority: 'low'
    });
  }

  //Capturar valores del formulario
  handleInputChange(e) {
    const {value, name} = e.target;  //para saber que input esta escribiendo, cual es su valor y alamcenarlos en una const
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
