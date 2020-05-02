import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public idGame: string;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  async ngOnInit() {
    await this.route.params.subscribe((data: any) => {
      this.idGame = data.idGame;
      console.log('this.idGame: ', this.idGame);
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}
