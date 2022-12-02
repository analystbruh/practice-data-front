import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttributionsComponent } from './footer/attributions/attributions.component';
import { CsvDocsComponent } from './home/csv-docs/csv-docs.component';
import { JsonDocsComponent } from './home/json-docs/json-docs.component';
import { SqlTableDocsComponent } from './home/sql-table-docs/sql-table-docs.component';
import { SqlSchemaDocsComponent } from './home/sql-schema-docs/sql-schema-docs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attributions', component: AttributionsComponent },
  { path: 'docs/csv', component: CsvDocsComponent },
  { path: 'docs/json', component: JsonDocsComponent },
  { path: 'docs/sql-table', component: SqlTableDocsComponent },
  { path: 'docs/sql-schema', component: SqlSchemaDocsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
