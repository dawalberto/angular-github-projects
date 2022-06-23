import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private repositoriesToShow = [
    'angular-anime-project',
    'carrito',
    'jonathan-web',
    'ip-address-tracker',
    'testimonials-grid-section',
    'Game-Of-Life',
    'CDN-find',
  ]

  constructor(private http: HttpClient) { }

  getRepositories() {
    return this.http.get('https://api.github.com/users/dawalberto/repos?per_page=100')
  }

  getOfflineRepositories() {
    return this.http.get('/assets/repos.json')
  }

  getFilteredRepositories(repositories) {
    return repositories.filter(repo => this.repositoriesToShow.includes(repo.name))
  }

}
