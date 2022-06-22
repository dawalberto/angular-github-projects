import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-github-projects';
  repositories = []
  repoClicked = {}
  showDetailsRepoClicked = false

  constructor(private repoService: RepositoriesService) {}

  ngOnInit(): void {
    this.repoService.getRepositories().subscribe(repos => {
      this.repositories = this.repoService.getFilteredRepositories(repos)
    })
  }

  showRepositorieDetails(repo) {
    this.showDetailsRepoClicked = true
    this.repoClicked = repo
  }

}
