import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../models/player.model';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public idGame: string;
  public nickname: string;
  public letter: string;
  public players: Array<Player>;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private playerService: PlayerService,
              public router: Router, private gameService: GameService) {}

  async ngOnInit() {
    await this.route.params.subscribe((data: any) => {
      this.idGame = data.idGame;
      this.nickname = data.nickname;
      this.letter = data.letter;

      this.playerService.getAllPlayers(this.idGame).valueChanges().subscribe((players) => {
        this.players = players;
      });
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  endQualify() {
    // const game = new Game({id: this.idGame, available: false, letter: null});
    // this.gameService.updateGame(game).then(() => {
      // this.playerService.removePlayer(this.idGame, this.nickname).then(() => {
        this.router.navigate(['tabs/tab1']);
      // });
    // });
  }
}
