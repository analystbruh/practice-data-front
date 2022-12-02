import { Component, OnInit } from '@angular/core';

export interface TransactionElement {
  transaction_id: string,
  customer_first_name: string,
  customer_last_name: string,
  customer_city: string,
  customer_state: string,
  customer_country: string,
  product_category: string,
  brand: string,
  product_name: string,
  price: string,
  employee_first_name: string,
  employee_last_name: string,
  employee_city: string,
  employee_state: string,
  employee_country: string,
  hire_date: string,
  termination_date: string,
  job_title: string,
  timestamp: string,
  transaction_type: string
}

const ELEMENT_DATA: TransactionElement[] = [
  {'transaction_id': '90000', 'customer_first_name': 'Rex', 'customer_last_name': 'Kennedy', 'customer_city': 'Thornton', 'customer_state': 'CO', 'customer_country': 'United States', 'product_category': 'cameras', 'brand': 'Fujifilm', 'product_name': 'Fujifilm X-T30 II', 'price': '900', 'employee_first_name': '', 'employee_last_name': '', 'employee_city': '', 'employee_state': '', 'employee_country': '', 'hire_date': '', 'termination_date': '', 'job_title': '', 'timestamp': '2020-01-02', 'transaction_type': 'Online'},
  {'transaction_id': '90001', 'customer_first_name': 'Ayden', 'customer_last_name': 'Rodgers', 'customer_city': 'Guatemala City', 'customer_state': 'Guatemala', 'customer_country': 'Guatemala', 'product_category': 'computer keyboards', 'brand': 'Razer', 'product_name': 'Razer Huntsman Tournament Edition', 'price': '80', 'employee_first_name': 'Lida', 'employee_last_name': 'Botha', 'employee_city': 'Giyani', 'employee_state': 'Limpopo', 'employee_country': 'South Africa', 'hire_date': '2022-12-22', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-02', 'transaction_type': 'In-Store'},
  {'transaction_id': '90002', 'customer_first_name': 'Jasper', 'customer_last_name': 'Reeves', 'customer_city': 'Tempe', 'customer_state': 'AZ', 'customer_country': 'United States', 'product_category': 'food', 'brand': 'inhouse', 'product_name': 'Durban Bunny Chow', 'price': '10', 'employee_first_name': '', 'employee_last_name': '', 'employee_city': '', 'employee_state': '', 'employee_country': '', 'hire_date': '', 'termination_date': '', 'job_title': '', 'timestamp': '2020-01-04', 'transaction_type': 'Online'},
  {'transaction_id': '90003', 'customer_first_name': 'Hanna', 'customer_last_name': 'Chaney', 'customer_city': 'Minneapolis', 'customer_state': 'MN', 'customer_country': 'United States', 'product_category': 'displays', 'brand': 'MSI', 'product_name': 'MSI Optix G271', 'price': '190', 'employee_first_name': 'Julius', 'employee_last_name': 'Khumalo', 'employee_city': 'Durban', 'employee_state': 'KwaZulu-Natal', 'employee_country': 'South Africa', 'hire_date': '2020-09-07', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-04', 'transaction_type': 'In-Store'},
  {'transaction_id': '90004', 'customer_first_name': 'Chad', 'customer_last_name': 'Clay', 'customer_city': 'Omaha', 'customer_state': 'NE', 'customer_country': 'United States', 'product_category': 'midi controllers', 'brand': 'Arturia', 'product_name': 'Arturia MiniLab MkII Mini Hybrid Keyboard Controller', 'price': '80', 'employee_first_name': '', 'employee_last_name': '', 'employee_city': '', 'employee_state': '', 'employee_country': '', 'hire_date': '', 'termination_date': '', 'job_title': '', 'timestamp': '2020-01-05', 'transaction_type': 'Online'},
  {'transaction_id': '90005', 'customer_first_name': 'Saniya', 'customer_last_name': 'Ewing', 'customer_city': 'Huntersville', 'customer_state': 'NC', 'customer_country': 'United States', 'product_category': 'speakers', 'brand': 'Electro', 'product_name': 'Electro-voice 15in powered speaker', 'price': '600', 'employee_first_name': 'Odwa', 'employee_last_name': 'Gwanya', 'employee_city': 'Dunwoody', 'employee_state': 'Georgia', 'employee_country': 'United States', 'hire_date': '2022-12-09', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-05', 'transaction_type': 'In-Store'},
  {'transaction_id': '90006', 'customer_first_name': 'Alfred', 'customer_last_name': 'Moss', 'customer_city': 'Gulfport', 'customer_state': 'MS', 'customer_country': 'United States', 'product_category': 'drinks', 'brand': 'inhouse', 'product_name': 'Grape Powerade', 'price': '3', 'employee_first_name': 'Odwa', 'employee_last_name': 'Gwanya', 'employee_city': 'Dunwoody', 'employee_state': 'Georgia', 'employee_country': 'United States', 'hire_date': '2022-12-09', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-06', 'transaction_type': 'In-Store'},
  {'transaction_id': '90007', 'customer_first_name': 'Brooks', 'customer_last_name': 'Gill', 'customer_city': 'Sunrise Manor', 'customer_state': 'NV', 'customer_country': 'United States', 'product_category': 'computer mice', 'brand': 'Razer', 'product_name': 'Razer Viper Mini', 'price': '20', 'employee_first_name': 'Odwa', 'employee_last_name': 'Gwanya', 'employee_city': 'Dunwoody', 'employee_state': 'Georgia', 'employee_country': 'United States', 'hire_date': '2022-12-09', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-06', 'transaction_type': 'In-Store'},
  {'transaction_id': '90008', 'customer_first_name': 'Zion', 'customer_last_name': 'Russell', 'customer_city': 'Spokane', 'customer_state': 'WA', 'customer_country': 'United States', 'product_category': 'microphones', 'brand': 'Blue', 'product_name': 'Blue Bluebird SL Large-Diaphragm Cardioid Condenser Microphone', 'price': '300', 'employee_first_name': 'Sonia', 'employee_last_name': 'Mbele', 'employee_city': 'Ulundi', 'employee_state': 'KwaZulu-Natal', 'employee_country': 'South Africa', 'hire_date': '2020-11-02', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-07', 'transaction_type': 'In-Store'},
  {'transaction_id': '90009', 'customer_first_name': 'Cynthia', 'customer_last_name': 'Hays', 'customer_city': 'San Diego', 'customer_state': 'CA', 'customer_country': 'United States', 'product_category': 'cameras', 'brand': 'Canon', 'product_name': 'Canon PowerShot SX70 HS', 'price': '740', 'employee_first_name': 'Bongeka', 'employee_last_name': 'Zimemo', 'employee_city': 'Durban', 'employee_state': 'KwaZulu-Natal', 'employee_country': 'South Africa', 'hire_date': '2020-07-22', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-08', 'transaction_type': 'In-Store'},
  {'transaction_id': '90010', 'customer_first_name': 'Tyree', 'customer_last_name': 'Rogers', 'customer_city': 'Myrtle Beach', 'customer_state': 'SC', 'customer_country': 'United States', 'product_category': 'food', 'brand': 'inhouse', 'product_name': 'Rice', 'price': '2', 'employee_first_name': 'Nadia', 'employee_last_name': 'Nakai', 'employee_city': 'Musina', 'employee_state': 'Limpopo', 'employee_country': 'South Africa', 'hire_date': '2022-04-05', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-08', 'transaction_type': 'In-Store'},
  {'transaction_id': '90011', 'customer_first_name': 'Johnny', 'customer_last_name': 'Dickerson', 'customer_city': 'Miami', 'customer_state': 'TN', 'customer_country': 'United States', 'product_category': 'midi controllers', 'brand': 'Arturia', 'product_name': 'Arturia MiniLab MkII Mini Hybrid Keyboard Controller', 'price': '80', 'employee_first_name': 'Odwa', 'employee_last_name': 'Gwanya', 'employee_city': 'Dunwoody', 'employee_state': 'Georgia', 'employee_country': 'United States', 'hire_date': '2022-12-09', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-09', 'transaction_type': 'In-Store'},
  {'transaction_id': '90012', 'customer_first_name': 'Annabella', 'customer_last_name': 'Merritt', 'customer_city': 'Honolulu', 'customer_state': 'HI', 'customer_country': 'United States', 'product_category': 'displays', 'brand': 'Asus', 'product_name': 'Asus VG248QG', 'price': '190', 'employee_first_name': 'Lida', 'employee_last_name': 'Botha', 'employee_city': 'Giyani', 'employee_state': 'Limpopo', 'employee_country': 'South Africa', 'hire_date': '2022-12-22', 'termination_date': '', 'job_title': 'Cashier', 'timestamp': '2020-01-09', 'transaction_type': 'In-Store'},
];

@Component({
  selector: 'app-csv-docs',
  templateUrl: './csv-docs.component.html',
  styleUrls: ['./csv-docs.component.css']
})
export class CsvDocsComponent implements OnInit {
  public transactionsCSV = 'http://127.0.0.1:5000/api/v1/transactions/csv';

  displayedColumns: string[] = [
    'transaction_id',
    'customer_first_name',
    'customer_last_name',
    'customer_city',
    'customer_state',
    'customer_country',
    'product_category',
    'brand',
    'product_name',
    'price',
    'employee_first_name',
    'employee_last_name',
    'employee_city',
    'employee_state',
    'employee_country',
    'hire_date',
    'termination_date',
    'job_title',
    'timestamp',
    'transaction_type'
  ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    history.back();
  }
}
