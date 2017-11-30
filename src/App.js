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
      rowBeingClicked: -1
    }
  }

  render() {
    return (
      <Rows
        rows={this.state.rows}
        addRow={this.addRow.bind(this)}
        deleteRow={this.deleteRow.bind(this)}
        onChangeId={this.onChangeId.bind(this)}
        onClickInput={this.onClickInput.bind(this)}
      />
    );
  }



  onChangeId(e) {
    // find the rowBeingClicked and change the id property
    if(this.state.rowBeingClicked !== -1) {
      console.log(this.state.rowBeingClicked)
      let newRows = this.state.rows.slice()
      newRows[this.state.rowBeingClicked].id = e.target.value
      this.setState({rows: newRows})
    }
  }

  onClickInput(rowId) {
    console.log(rowId)
    this.setState({rowBeingClicked: rowId})
  }

  deleteRow(index) {
    let newRows = this.state.rows.filter((row, i) => i !== index)
    this.setState({rows: newRows})
  }

  addRow() {
    let newRows = this.state.rows.concat({id:'new', decimals:'woo', min:'1', max:'24'})
    this.setState({rows: newRows})

  }

}

export default App;
