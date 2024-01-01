import React, { Component } from "react";

export class UnControlledFormntrolledForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Input value-", this.inputRef.current.value);
          }}
        >
          <div>
            <label>UnControlled Input </label>
            <input
              type="date"
              name="data"
              id="date-input"
              ref={this.inputRef}
            />
          </div>
          <button tyoe="submit">Submit</button>
        </form>
      </div>
    );
  }
}