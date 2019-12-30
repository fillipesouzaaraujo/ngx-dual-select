import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-dual-select',
  inputs: [
    "leftTitle",
    "rightTitle"
  ],
  templateUrl: './ngx-dual-select.component.html',
  styleUrls: ['./ngx-dual-select.component.scss']
})
export class NgxDualSelectComponent implements OnInit {

  leftTitle: string;
  rightTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
