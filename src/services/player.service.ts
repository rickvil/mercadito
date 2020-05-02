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

  getSessionPlayer(idGame: string, nickname: string){
    const playerSession: AngularFirestoreDocument<Player> = this.afs.doc<Player>(`games/${idGame}/players/${nickname}`);
    return playerSession;
  }

  playersInSession(idGame: string){
    const players: AngularFirestoreCollection<Player> = this.afs.collection<Player>(`games/${idGame}/players`);
    players.valueChanges().subscribe((users) => {
      console.log('users:', users);
    });
  }
}