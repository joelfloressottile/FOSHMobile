import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.page.html',
  styleUrls: ['./record-view.page.scss'],
})
export class RecordViewPage implements OnInit {
  @Input() record;
  constructor() { }

  ngOnInit() {
  }

}
