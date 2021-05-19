import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  adminNewsURL: string = 'http://localhost:3001/news/'

  constructor(private httpClient: HttpClient,
    private _user: UserService) { }

  getAllNews() {

    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.get<any>(this.adminNewsURL, httpOption);
  }

  getNews(id: string) {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.get<any>(this.adminNewsURL + id, httpOption);
  }

  deleteNews(id: string) {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.delete<any>(this.adminNewsURL + id, httpOption);
  }

  postNews(news: any) {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.post<any>(this.adminNewsURL, httpOption, news);
  }

  updateNews(id: string, news: any)
  {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.put<any>(this.adminNewsURL + id, httpOption, news);
  }
}
