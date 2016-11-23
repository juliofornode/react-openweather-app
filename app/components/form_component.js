import React, {Component} from 'react';

class FormComponent extends Component {

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    var location = this.refs.location.value;
    this.props.passToParent(location);
  }

  handleChange(eventObject) {
    console.log('desde onChange: ' + eventObject.target.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Search City: <input type="text" ref="location" />
          <button type="submit">Submit</button>
        </form>
        <p><strong>Note: </strong> We have two options to handle the form input:</p>
        <ol>
          <li>In one step, we can use onSubmit in the form tag and get the input using this.refs.name.value and then handle it.</li>
          <li>In two steps, we first call onChange in the input field, then this.eventObject.target.value to get the value there.
            Then we use onSubmit in the form tag and handle there the input value got.</li>
        </ol>
      </div>
    );
  }
}

export default FormComponent;
