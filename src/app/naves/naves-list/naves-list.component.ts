import { Component, OnInit } from '@angular/core';
import  {Naves} from '../naves';
import { NavesService } from '../naves.service';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {

  navess: Array<Naves> = [];
  numRebelion: number = 0;
  numImperio: number = 0;
  numNeutral : number = 0;
  selectedNaves!: Naves;
  selected: Boolean = false;
  constructor(private navesService:NavesService) { }

  getNavess(): void {
    this.navesService.getNavess().subscribe((navess) => {
      this.navess = navess;
      this.numImperio = this.navesService.getNavesImperio(this.navess);
      this.numRebelion = this.navesService.getNavesRebelion(this.navess);
      this.numNeutral = this.navesService.getNavesNeutrales(this.navess);

    });
  }

    onSelected(nave: Naves): void {
      this.selected = true;
      this.selectedNaves = nave;
    
  }
  ngOnInit() {
    this.getNavess();
  }

}
