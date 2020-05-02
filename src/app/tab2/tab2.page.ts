import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {GameService} from '../../services/game.service';
import {Player} from '../../models/player.model';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public idGame: string;
  public nickname: string;
  public player: Player;
  public game: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService, private playerService: PlayerService,
              public router: Router) {}

  async ngOnInit() {
    await this.route.params.subscribe((data: any) => {
      this.idGame = data.idGame;
      this.nickname = data.nickname;
    });

    this.loadGame();
    this.loadPlayer();
  }

  public loadGame() {
    this.gameService.getGame(this.idGame).valueChanges().subscribe((gameDoc) => {
      this.game = gameDoc;
      if (!this.game.available) {
        this.saveValuesPlayer();
      }
    });
  }

  public loadPlayer() {
    this.playerService.getSessionPlayer(this.idGame, this.nickname).valueChanges().subscribe((playerDoc) => {
      this.player = playerDoc;
    });
  }

  public endRound() {

    this.game.available = false;
    this.gameService.updateGame(this.game).then(() => console.log('sucess endRound'));
  }

  public saveValuesPlayer() {
    if (this.player) {
      this.playerService.updateSessionPlayer(this.player, this.idGame).then(() => console.log('sucess saveValuesPlayer'));
    }
  }

  public goTabValidate() {
    this.router.navigate(['tabs/tab3', { idGame: this.game.id}]);
  }
}
