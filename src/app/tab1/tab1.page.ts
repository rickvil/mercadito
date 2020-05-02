import { Component } from '@angular/core';
import {GameService} from '../../services/game.service';
import {PlayerService} from '../../services/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nameGame: string;
  public nickname: string;

  constructor(private gameService: GameService, private playerService: PlayerService, public router: Router) {

  }

  createGame() {
    this.gameService.createGame(this.nameGame).then(() => {
      this.playerService.createPlayerInGame(this.nameGame, this.nickname).then(() => {
        this.router.navigate(['tabs/tab2', { idGame: this.nameGame, nickname: this.nickname}]);
      });
    });
  }
}
