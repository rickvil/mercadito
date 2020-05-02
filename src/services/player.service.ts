import { Injectable } from '@angular/core';
import {Player} from '../models/player.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private afs: AngularFirestore) {}

  createPlayerInGame(idGame: string, nickname: string) {
    const player = new Player({id: nickname});

    const players: AngularFirestoreCollection<Player> = this.afs.collection<Player>(`games/${idGame}/players`);
    return players.doc(player.id).set(Object.assign({}, player));
  }

  getSessionPlayer(idGame: string, nickname: string): AngularFirestoreDocument<Player> {
    return this.afs.doc<Player>(`games/${idGame}/players/${nickname}`);
  }

  updateSessionPlayer(player: Player, idGame: string) {
    return this.afs.doc<Player>(`games/${idGame}/players/${player.id}`).update(Object.assign({}, player));
  }

  playersInSession(idGame: string) {
    const players: AngularFirestoreCollection<Player> = this.afs.collection<Player>(`games/${idGame}/players`);
    players.valueChanges().subscribe((users) => {
      console.log('users:', users);
    });
  }
}
