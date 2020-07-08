import React, { Component } from 'react';

import TableData from "../data/indextest.json";

import TextInputGroup from '../layout/TextInputGroup';
import TableSlider from '../tablefilter/TableSlider';

// import Typography from '@material-ui/core/Typography';

import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

class FilterTable extends Component {

    constructor() {
        super();
        this.state = {
            tables: [
                // {
                //     id: 1,
                //     firstName: 'John',
                //     lastName: 'Doe',
                //     Email: 'John@example.com'
                // },
                // {
                //     id: 2,
                //     firstName: 'Mary',
                //     lastName: 'Li',
                //     Email: 'Mary@example.com'
                // },
                // {
                //     id: 3,
                //     firstName: 'Snow',
                //     lastName: 'Yan',
                //     Email: 'Snow@example.com'
                // }
            ]
        };
        this.setData();
    }

    setData() {
        var i = 0;
        var x;
    
        for (i = 0; i<Object.keys(TableData.products).length ;i++){
            x = Object.keys(TableData.products)[i];

            this.setState({ 
                tables: this.state.tables.push
                ({
                    id: i, 
                    vcpu: TableData.products[x].attributes.vcpu, 
                    memory: TableData.products[x].attributes.memory,
                    storage: TableData.products[x].attributes.storage,
                    instanceType:TableData.products[x].attributes.instanceType}) 
            });            
        } 
    };

    filterData(vCpuRange){
         var table, tr, td, i;

         table = document.getElementById("myTable");
         tr = table.getElementsByTagName("tr");

         for(i = 0; i < tr.length; i++) {
             if(parseInt(this.state.tables[i].vcpu) === parseInt(vCpuRange)){
                 tr[i].style.display = "";
             }
             else{
                 tr[i].style.display = 'none';
             }
         }
    };
   


    onNameChange = e => {
        
        this.setState({ [e.target.name]:e.target.value});
        console.log(e.target.value);
        this.filterData(e.target.value);
   };

   sortTable(col) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    console.log(col);
    
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[col];
        y = rows[i + 1].getElementsByTagName("TD")[col];

        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

    render() {
        const { tables } = this.state;

        return (
            <div class="container">
                <h2>Filterable Table</h2>
                <TableSlider />
                <input type="text" id="myInput" class="form-control" placeholder="Search" onKeyUp={this.onNameChange}/>
                {/* <button class="btn btn-default" type="submit"><i class="glyphicon gl)yphicon-search"></i></button> */}
                <br />

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th onClick={this.sortTable.bind(this,0)}>vCpu</th>
                            <th onClick={this.sortTable.bind(this,1)}>Memory</th>
                            <th onClick={this.sortTable.bind(this,2)}>Storage</th>
                            <th onclick={this.sortTable.bind(this,3)}>instanceType</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                    {tables.map(table => (
                        <tr>
                            <td >{table.vcpu}</td>
                            <td >{table.memory}</td>
                            <td >{table.storage}</td>
                            <td>{table.instanceType}</td>
                        </tr>
                    ))
                    }   
                    </tbody>
                </table>
            </div>  
        )
    } 
}

export default FilterTable;
