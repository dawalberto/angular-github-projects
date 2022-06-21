import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-github-projects';
  repositories

  constructor(private repoService: RepositoriesService) {}

  ngOnInit(): void {
    this.repositories = this.repoService.getRepositories()
  }

}
