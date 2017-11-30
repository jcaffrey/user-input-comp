import React, { Component } from 'react';
import Rows from './pagedraw/rowscomponent'



class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: [{
        id: 'ad',
        decimals: 'asd',
        min: 'asd',
        max: 'asf'
      }],
      idBeingTyped: ''
    }
  }

  render() {
    return (
      <Rows
        rows={this.state.rows}
        onChangeId={this.changeId.bind(this)}
        addRow={this.addRow.bind(this)}
        deleteRow={this.deleteRow.bind(this)}
      />
    );
  }

  changeId(rowId, newId) {

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
