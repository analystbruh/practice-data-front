import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-sql-schema-docs',
  templateUrl: './sql-schema-docs.component.html',
  styleUrls: ['./sql-schema-docs.component.css'],
  providers: [ HomeComponent ]
})
export class SqlSchemaDocsComponent implements OnInit {
  public sample = `CREATE TABLE employees (
    id integer   NOT NULL,
    first_name varchar(50)   NOT NULL,
    last_name varchar(50)   NOT NULL,
    city varchar(50)   NOT NULL,
    state varchar(50)   NULL,
    country varchar(50)   NULL,
    hire_date date   NOT NULL,
    termination_date date   NULL,
    job_title varchar(50)   NOT NULL,
    CONSTRAINT pk_employees PRIMARY KEY (
        id
    )
);

CREATE TABLE products (
    id integer   NOT NULL,
    category_id integer   NOT NULL,
    brand varchar(50)   NOT NULL,
    product_name varchar(200)   NOT NULL,
    price integer   NOT NULL,
    CONSTRAINT pk_products PRIMARY KEY (
        id
    )
);
CREATE TABLE transactions (
    id integer   NOT NULL,
    customer_id integer   NOT NULL,
    product_id integer   NOT NULL,
    employee_id integer   NULL,
    timestamp date   NOT NULL,
    transaction_type varchar(10)   NOT NULL,
    CONSTRAINT pk_transactions PRIMARY KEY (
        id
    )
);

CREATE TABLE customers (
    id integer   NOT NULL,
    first_name varchar(50)   NOT NULL,
    last_name varchar(50)   NOT NULL,
    city varchar(50)   NOT NULL,
    state varchar(50)   NULL,
    country varchar(50)   NOT NULL,
    CONSTRAINT pk_customers PRIMARY KEY (
        id
    )
);

CREATE TABLE product_categories (
    id integer   NOT NULL,
    product_category varchar(100)   NOT NULL,
    CONSTRAINT pk_product_categories PRIMARY KEY (
        id
    )
);

ALTER TABLE products ADD CONSTRAINT fk_products_category_id FOREIGN KEY(category_id)
REFERENCES product_categories (id);

ALTER TABLE transactions ADD CONSTRAINT fk_transactions_customer_id FOREIGN KEY(customer_id)
REFERENCES customers (id);

ALTER TABLE transactions ADD CONSTRAINT fk_transactions_product_id FOREIGN KEY(product_id)
REFERENCES products (id);

ALTER TABLE transactions ADD CONSTRAINT fk_transactions_employee_id FOREIGN KEY(employee_id)
REFERENCES employees (id);

insert into customers values (5000, 'Diego', 'Prince', 'Milledgeville', 'GA', 'United States');

insert into employees values (125, 'Brenda', 'Jaxa', 'Durban', 'KwaZulu-Natal', 'South Africa', '2020-10-12', Null, 'Front End Developer');

insert into product_categories values (300, 'speakers');

insert into products values (4000, 313, 'inhouse', 'Malva Pudding', 5);

insert into transactions values (90000, 5416, 4177, Null, '2020-01-02', 'Online');
`

  constructor(public hc: HomeComponent) { }

  ngOnInit(): void {
  }

  back(): void {
    history.back();
  }
}
