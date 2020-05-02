import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
public idGame: string;
public nickname: string;

  constructor(private route: ActivatedRoute, private gameService: GameService, private playerService: PlayerService) {}

  async ngOnInit() {
    await this.route.params.subscribe((data: any) => {
      this.idGame = data.idGame;
      this.nickname = data.nickname;
    });

    this.loadGame();
    this.loadPlayer();
  }


  public loadGame() {
    console.log('ocho');
    this.gameService.getGame(this.idGame).valueChanges().subscribe((gameDoc) => {
      console.log('gameDoc: ', gameDoc);
    });
  }

  public loadPlayer() {
    console.log('nueve');
    this.playerService.getSessionPlayer(this.idGame, this.nickname).valueChanges().subscribe((playerDoc) => {
      console.log('playerDoc: ', playerDoc);
    });
  }
}
