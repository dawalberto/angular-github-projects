import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepositories() {
    return this.http.get('/assets/repos.json')
  }
}
