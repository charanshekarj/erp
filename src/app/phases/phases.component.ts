import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss']
})
export class PhasesComponent implements OnInit {

  constructor() { }

  @Input() trait = {}

  ngOnInit(): void {
  }

}
