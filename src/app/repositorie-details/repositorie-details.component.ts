import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-repositorie-details',
  templateUrl: './repositorie-details.component.html',
  styleUrls: ['./repositorie-details.component.css']
})
export class RepositorieDetailsComponent implements OnInit {

  @Input() repo;
  @Output() closeRepoDetails = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
