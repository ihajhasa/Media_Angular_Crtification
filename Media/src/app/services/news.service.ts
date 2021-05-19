import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  adminNewsURL: string = 'http://localhost:3001/news/'

  constructor(private httpClient: HttpClient) { }

  getAllNews() {
    return this.httpClient.get<any>(this.adminNewsURL);
  }

  getNews(id: string) {
    return this.httpClient.get<any>(this.adminNewsURL + id);
  }

  deleteNews(id: string) {
    return this.httpClient.delete<any>(this.adminNewsURL + id);
  }

  postNews(news: any) {
    return this.httpClient.post<any>(this.adminNewsURL, news);
  }

  updateNews(id: string, news: any)
  {
    return this.httpClient.put<any>(this.adminNewsURL + id, news);
  }
}
