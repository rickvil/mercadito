import { Component } from '@angular/core';
import {GameService} from '../../services/game.service';
import {PlayerService} from '../../services/player.service';
import {Router} from '@angular/router';
import {Game} from '../../models/game.model';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nameGame: string;
  public nickname: string;
  public game: Game;
  public players: Array<Player>;

  constructor(private gameService: GameService, private playerService: PlayerService, public router: Router) {

  }

  createGame() {

    this.gameService.getGame(this.nameGame).valueChanges().subscribe((partida) => {
      if (partida === undefined){
        this.gameService.createGame(this.nameGame).then((game) => {
          this.playerService.createPlayerInGame(this.nameGame, this.nickname).then(() => {
            this.playerService.getAllPlayers(this.nameGame).valueChanges().subscribe((players) => {
              this.players = players;
            });
          });
        });
      } else {
        this.game = partida;
        this.playerService.createPlayerInGame(this.nameGame, this.nickname).then(() => {
          this.playerService.getAllPlayers(this.nameGame).valueChanges().subscribe((players) => {
            this.players = players;
          });
        });
      }
    });
  }

  public startGame() {
    this.game.available = true;
    this.game.letter = this.gameService.generateRandomLetter();
    this.gameService.updateGame(this.game).then(() => {
      this.router.navigate(['tabs/tab2', { idGame: this.nameGame, nickname: this.nickname}]);
    });
  }
  public joinGame() {
    this.router.navigate(['tabs/tab2', { idGame: this.nameGame, nickname: this.nickname}]);
  }
}
