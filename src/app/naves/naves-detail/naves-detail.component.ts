import { Component,Input, OnInit } from '@angular/core';
import { Naves} from '../naves';

@Component({
  selector: 'app-naves-detail',
  templateUrl: './naves-detail.component.html',
  styleUrls: ['./naves-detail.component.css']
})
export class NavesDetailComponent implements OnInit {

  @Input() navesDetail!: Naves;
  constructor() { }

  ngOnInit() {
  }

}
