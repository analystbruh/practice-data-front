import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-sql-table-docs',
  templateUrl: './sql-table-docs.component.html',
  styleUrls: ['./sql-table-docs.component.css'],
  providers: [ HomeComponent ]
})
export class SqlTableDocsComponent implements OnInit {
  public sample = `CREATE TABLE "store_transactions" (
    "transaction_id" integer NOT NULL,
    "customer_first_name" varchar(50) NOT NULL,
    "customer_last_name" varchar(50) NOT NULL,
    "customer_city" varchar(50) NOT NULL,
    "customer_state" varchar(50) NULL,
    "customer_country" varchar(50) NOT NULL,
    "product_category" varchar(100) NOT NULL,
    "brand" varchar(50) NOT NULL,
    "product_name" varchar(200) NOT NULL,
    "price" integer NOT NULL,
    "employee_first_name" varchar(50) NULL,
    "employee_last_name" varchar(50) NULL,
    "employee_city" varchar(50) NULL,
    "employee_state" varchar(50) NULL,
    "employee_country" varchar(50) NULL,
    "hire_date" date NULL,
    "termination_date" date NULL,
    "job_title" varchar(50) NULL,
    "timestamp" date NOT NULL,
    "transaction_type" varchar(10) NOT NULL
    );
    insert into store_transactions values (90000, 'Rex', 'Kennedy', 'Thornton', 'CO', 'United States', 'cameras', 'Fujifilm', 'Fujifilm X-T30 II', 900, Null, Null, Null, Null, Null, Null, Null, Null, '2020-01-02', 'Online');
    insert into store_transactions values (90001, 'Ayden', 'Rodgers', 'Guatemala City', 'Guatemala', 'Guatemala', 'computer keyboards', 'Razer', 'Razer Huntsman Tournament Edition', 80, 'Lida', 'Botha', 'Giyani', 'Limpopo', 'South Africa', '2022-12-22', Null, 'Cashier', '2020-01-02', 'In-Store');
    insert into store_transactions values (90002, 'Jasper', 'Reeves', 'Tempe', 'AZ', 'United States', 'food', 'inhouse', 'Durban Bunny Chow', 10, Null, Null, Null, Null, Null, Null, Null, Null, '2020-01-04', 'Online');
    insert into store_transactions values (90003, 'Hanna', 'Chaney', 'Minneapolis', 'MN', 'United States', 'displays', 'MSI', 'MSI Optix G271', 190, 'Julius', 'Khumalo', 'Durban', 'KwaZulu-Natal', 'South Africa', '2020-09-07', Null, 'Cashier', '2020-01-04', 'In-Store');`
  constructor(public hc: HomeComponent) { }

  ngOnInit(): void {
  }

  back(): void {
    history.back();
  }

}
