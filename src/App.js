import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/ag-theme-fresh.css'
// import {Provider} from "react-redux";
// import {createStore} from "redux";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      columnDefs: [
        {headerName: 'Title', field:'title'},
        {headerName: 'Author', field:'author'},
        {headerName: 'Year', field:'year'},
        {headerName: 'ISBN', field:'isbn'}
      ],
    }
    
  }
  
  //use a plain html 5 fetch since there are no real paramaters for the API :(
  componentDidMount() {
         fetch('https://servicepros-test-api.herokuapp.com/api/v1/books')
             .then(result => result.json())
             .then(rowData => this.setState({rowData}))
  }
 
 
    

  //call render after work and modification to the dom
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='ag-theme-fresh' style={{ height: '500px', width: '800px' }} >
          <AgGridReact
            enableSorting={true}
            enableFilter={true}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            rowSelection={this.state.rowSelection}
            enableColResize={true}
            rowGroupPanelShow={this.state.rowGroupPanelShow}
            pivotPanelShow={this.state.pivotPanelShow}
            enableRangeSelection={true}
            paginationAutoPageSize={true}
            paginationPageSize={this.state.paginationPageSize}
            paginationNumberFormatter={this.state.paginationNumberFormatter}
            pagination={true}
            defaultColDef={this.state.defaultColDef}
            >
          </AgGridReact>
      </div>
      </div>
      
    );
  }
}

export default App;
