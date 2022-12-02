import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AttributionsComponent } from './footer/attributions/attributions.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectTable } from './home/home.component';
import { SelectSchema } from './home/home.component';
import { CsvDocsComponent } from './home/csv-docs/csv-docs.component';
import { JsonDocsComponent } from './home/json-docs/json-docs.component';
import { SqlTableDocsComponent } from './home/sql-table-docs/sql-table-docs.component';
import { SqlSchemaDocsComponent } from './home/sql-schema-docs/sql-schema-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AttributionsComponent,
    SelectTable,
    SelectSchema,
    CsvDocsComponent,
    JsonDocsComponent,
    SqlTableDocsComponent,
    SqlSchemaDocsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
