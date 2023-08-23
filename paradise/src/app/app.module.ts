import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';
import { PasswordComponent } from './password/password.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PasswordpopupComponent } from './passwordpopup/passwordpopup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CatalogGuard } from './catalog.guard';


const routes: Routes = [
  { path: '', component: PasswordComponent }, // Home page route (default)
  { path: 'catalog', component: HomeComponent, canActivate: [CatalogGuard] }, // Suggestion page route
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect all other unknown routes to the home page
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PasswordpopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    CarouselModule,
    MatInputModule,
    PasswordComponent,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
