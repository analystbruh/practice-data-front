import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-docs',
  templateUrl: './json-docs.component.html',
  styleUrls: ['./json-docs.component.css']
})
export class JsonDocsComponent implements OnInit {
  public transactionsJSON = 'http://127.0.0.1:5000/api/v1/transactions/json';
  public sample = [
    {
      "brand": "Fujifilm",
      "customer_city": "Thornton",
      "customer_country": "United States",
      "customer_first_name": "Rex",
      "customer_last_name": "Kennedy",
      "customer_state": "CO",
      "employee_city": null,
      "employee_country": null,
      "employee_first_name": null,
      "employee_last_name": null,
      "employee_state": null,
      "hire_date": null,
      "job_title": null,
      "price": 900,
      "product_category": "cameras",
      "product_name": "Fujifilm X-T30 II",
      "termination_date": null,
      "timestamp": "Thu, 02 Jan 2020 00:00:00 GMT",
      "transaction_id": 90000,
      "transaction_type": "Online"
    },
    {
      "brand": "Razer",
      "customer_city": "Guatemala City",
      "customer_country": "Guatemala",
      "customer_first_name": "Ayden",
      "customer_last_name": "Rodgers",
      "customer_state": "Guatemala",
      "employee_city": "Giyani",
      "employee_country": "South Africa",
      "employee_first_name": "Lida",
      "employee_last_name": "Botha",
      "employee_state": "Limpopo",
      "hire_date": "Thu, 22 Dec 2022 00:00:00 GMT",
      "job_title": "Cashier",
      "price": 80,
      "product_category": "computer keyboards",
      "product_name": "Razer Huntsman Tournament Edition",
      "termination_date": null,
      "timestamp": "Thu, 02 Jan 2020 00:00:00 GMT",
      "transaction_id": 90001,
      "transaction_type": "In-Store"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    history.back();
  }

}
