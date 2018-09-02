import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ReportsModule } from './reports/reports.module';
import { PropManagerModule } from './prop-manager/prop-manager.module';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      TopNavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      AuthModule,
      PropManagerModule,
      ReportsModule
   ],
   providers: [
      AppService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
