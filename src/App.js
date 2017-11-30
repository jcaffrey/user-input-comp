import React, { Component } from 'react';
import Rows from './pagedraw/rowscomponent'

// questions: should we sanitize the input in any way, will we want to persist the data in any way

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: [{
        id: '',
        decimals: '',
        min: '',
        max: ''
      }],
      rowBeingClicked: -1,
      colTitleBeingClicked: '',
    }
  }

  render() {
    return (
      <Rows
        rows={this.state.rows}
        addRow={this.addRow.bind(this)}
        deleteRow={this.deleteRow.bind(this)}
        onClickInput={this.onClickInput.bind(this)}
        onChangeInput={this.onChangeInput.bind(this)}
      />
    );
  }

  onChangeInput(e) {
    if(this.state.rowBeingClicked !== -1 && this.state.colTitleBeingClicked !== '') {
      let attribute = this.state.colTitleBeingClicked
      let newRows = this.state.rows.slice()
      newRows[this.state.rowBeingClicked][attribute] = e.target.value
      this.setState({rows: newRows})
    }
  }

  onClickInput(rowId, colTitle) {
    this.setState({rowBeingClicked: rowId, colTitleBeingClicked: colTitle})
  }

  deleteRow(index) {
    let newRows = this.state.rows.filter((row, i) => i !== index)
    this.setState({rows: newRows})
  }

  addRow() {
    let newRows = this.state.rows.concat({id:'', decimals:'', min:'', max:''})
    this.setState({rows: newRows})
  }

}

export default App;
