import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Game} from '../models/game.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
  }

  createGame(idGame: string) {
    const game = new Game({id: idGame, available: true, letter: null}) ;

    const games: AngularFirestoreCollection<Game> = this.afs.collection<Game>('games');
    return games.doc(game.id).set(Object.assign({}, game));
  }

  getGame(idGame: string): AngularFirestoreDocument<Game> {
    return this.afs.doc<Game>(`games/${idGame}`);
  }

  updateGame() {

  }
}
