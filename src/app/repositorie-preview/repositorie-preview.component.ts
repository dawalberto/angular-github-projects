import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorie-preview',
  templateUrl: './repositorie-preview.component.html',
  styleUrls: ['./repositorie-preview.component.css']
})
export class RepositoriePreviewComponent implements OnInit {
  @Input() repo;

  constructor() { }

  ngOnInit(): void {
  }

}
