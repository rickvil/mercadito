import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public idGame: string;
  public players: Array<Player>;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private playerService: PlayerService) {}

  async ngOnInit() {
    await this.route.params.subscribe((data: any) => {
      this.idGame = data.idGame;
      this.playerService.getAllPlayers(this.idGame).valueChanges().subscribe((players) => {
        this.players = players;
      });
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}
