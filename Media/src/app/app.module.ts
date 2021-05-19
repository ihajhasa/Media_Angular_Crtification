import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { ChatComponent } from './components/chat/chat.component';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SportComponent } from './components/sport/sport.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutUsComponent,
    AddNewsComponent,
    EditNewsComponent,
    ChatComponent,
    NewsSliderComponent,
    WeatherComponent,
    SportComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
