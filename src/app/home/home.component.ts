import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public transactionsCSV = 'http://127.0.0.1:5000/api/v1/transactions/csv';
  public transactionsJSON = 'http://127.0.0.1:5000/api/v1/transactions/json';

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  openSelectTableDialog(): void {
    this.dialog.open(SelectTable, {
      width: '300px'
    });
  }

  openSelectSchemaDialog(): void {
    this.dialog.open(SelectSchema, {
      width: '300px'
    });
  }
}

@Component({
  selector: 'select-table',
  templateUrl: './select-table.html',
  styleUrls: ['./select-table.css']
})
export class SelectTable {
  public transactionsSQL = 'http://127.0.0.1:5000/api/v1/transactions/sql?system=';

  constructor(public dialogRef: MatDialogRef<SelectTable>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'select-schema',
  templateUrl: './select-schema.html',
  styleUrls: ['./select-schema.css']
})
export class SelectSchema {
  public transactionsSQL = 'http://127.0.0.1:5000/api/v1/transactions/schema?system=';

  constructor(public dialogRef: MatDialogRef<SelectSchema>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}