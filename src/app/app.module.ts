import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavigationComponent,
    GalleryComponent,
    ContactComponent
  ],import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
  import { MatSliderModule } from '@angular/material/slider';
  import { MatMenuModule } from '@angular/material/menu';
  import { MatIconModule } from '@angular/material/icon';
  import { MatListModule } from '@angular/material/list';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatDividerModule } from '@angular/material/divider';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { NavigationComponent } from './components/navigation/navigation.component';
  import { MatCardModule } from '@angular/material/card';
  import { MatInputModule } from "@angular/material/input";
  import { MatButtonModule } from "@angular/material/button";
  import { MatTabsModule } from "@angular/material/tabs";
  import { ProfileComponent } from './pages/profile/profile.component';
  import { ContactComponent } from './pages/contact/contact.component';
  import { HomeComponent } from './pages/home/home.component';
  import { GalleryComponent } from './pages/gallery/gallery.component';
  
  
  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      GalleryComponent,
      NavigationComponent,
      ContactComponent,
      ProfileComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatDividerModule,
      MatMenuModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatSidenavModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatTabsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
