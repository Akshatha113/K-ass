import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.service';

 

@Component({

  selector: 'app-modal',

  templateUrl: './modal.component.html',

  styleUrls: ['./modal.component.css']

})

export class ModalComponent implements OnInit {

 

  tableData: any[] = [];

  searchData = "";

  selectedIDs: any[] = [];

  model: any = {};

  isDesc: boolean = false;

  column: string = 'name';

  navTabs = ['Immunization Alerts', 'lab Alerts', 'DI Alerts', 'Procedure Alerts', 'RX Specific Alerts', 'DX Specific Alerts', 'Patient Specific Alerts']

 

  constructor(private config : ConfigService) { }

 

  ngOnInit(): void {

    this.getTableData();

  }

 

  getTableData () {

    this.config.getData().subscribe(a => {

      this.tableData = a.data;

    });

  }

 

  selectID(id:any, event:any) {

    console.log(event);

    if(event.target.checked) {

      this.selectedIDs.push(id);

    } else {

      this.selectedIDs = this.selectedIDs.filter(x => x!= id);

    }

    console.log(this.selectedIDs);

  }

 

  selectAll(event:any) {

    if(event.target.checked) {

      this.tableData.filter(p =>  {

        this.selectedIDs.push(p.id);

      });

    } else {

        this.selectedIDs = [];

    }

  }

 

  deleteSelected(){

    this.selectedIDs.forEach((obj) => {

      this.tableData= this.tableData.filter(item=> item.id !== obj);

    });

    console.log(this.tableData)

  }

  onSubmit(){

    this.tableData.push(this.model);

  }

 

  sort(property:any) {

    this.isDesc = !this.isDesc; //change the direction    

    this.column = property;

    let direction = this.isDesc ? 1 : -1;

 

    this.tableData.sort(function (a:any, b:any) {

      if (a[property] < b[property]) {

        return -1 * direction;

      }

      else if (a[property] > b[property]) {

        return 1 * direction;

      }

      else {

        return 0;

      }

    });

  };

 

}