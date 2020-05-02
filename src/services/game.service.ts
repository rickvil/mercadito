import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Game} from '../models/game.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Player} from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private list: AngularFireList<any>;
  private objeto: AngularFireObject<any>;
  private itemDoc: AngularFirestoreDocument<Game>;


  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
  }
  createGame(idGame: string) {
    const game = new Game({id: idGame, available: true, letter: null}) ;

    const games: AngularFirestoreCollection<Game> = this.afs.collection<Game>('games');
    return games.doc(game.id).set(Object.assign({}, game));
  }

  getGame(idGame: string) {
    const gameSession: AngularFirestoreDocument<Game> = this.afs.doc<Game>(`games/${idGame}`);
    return gameSession;
  }
}
