import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Game} from '../models/game.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Player} from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // private itemsCollection: AngularFirestoreCollection<Game>;
  // private items: Observable<Game[]>;


  private list: AngularFireList<any>;
  private objeto: AngularFireObject<any>;
  private itemDoc: AngularFirestoreDocument<Game>;


  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
  }
  //
  // prueba(){
  //   const idGame = 'sabado';
  //   const nickname = 'rickvil';
  //   const game = new Game({id: idGame, available: false, letter: null}) ;
  //   console.log('uno');
  //   const games: AngularFirestoreCollection<Game> = this.afs.collection<Game>('games');
  //   games.doc(game.id).set(Object.assign({}, game));
  //   console.log('dos');
  //   const gameSession: AngularFirestoreDocument = this.afs.doc<Game>(`games/${idGame}`);
  //
  //   const player = new Player({id: nickname});
  //   console.log('tres');
  //   const players: AngularFirestoreCollection<Player> = gameSession.collection<Player>(`players`);
  //
  //   players.valueChanges().subscribe((algo) => {
  //     console.log('algo: ', algo);
  //   });
  //   console.log('cuatro');
  //   console.log('player: ', player);
  //   players.doc(player.id).set(Object.assign({}, player));
  //   console.log('cinco');
  //   // const playerSession: AngularFirestoreDocument<Player> = this.afs.doc<Player>(`games/${idGame}/players/${nickname}`);
  // }


  createGame(idGame: string) {
    const game = new Game({id: idGame, available: false, letter: null}) ;

    const games: AngularFirestoreCollection<Game> = this.afs.collection<Game>('games');
    return games.doc(game.id).set(Object.assign({}, game));
  }

  getGame(idGame: string) {
    const gameSession: AngularFirestoreDocument = this.afs.doc<Game>(`games/${idGame}`);
    return gameSession;
  }


  // loadFst() {
  //   this.itemsCollection = this.afs.collection<Game>('games');
  //   this.items = this.itemsCollection.valueChanges();
  //
  //   const gameUno = new Game({id: 'gameUno', code: 'UNOTE', available: false});
  //   // this.itemsCollection.add(gameUno);
  //   // this.itemsCollection.doc('gameUno').set({id: 'gameUno', code: 'UNOTE', available: false});
  //
  //   this.items.subscribe((coleccion) => {
  //     console.log('coleccion: ', coleccion);
  //     coleccion.forEach((datoGame: any) => {
  //       console.log('datoGame: ', datoGame);
  //     });
  //   });
  //
  //   const gameDos = new Game({id: 'gameDos', code: 'DOSOTE', available: false});
  //   // this.itemsCollection.add(gameDos);
  //   // this.itemsCollection.doc(gameDos.id).set(Object.assign({}, gameDos));
  //
  //   this.itemDoc = this.afs.doc<Game>('games/SABADO');
  //   this.itemDoc.valueChanges().subscribe((documento) => {
  //     console.log('documento: ', documento);
  //     console.log('documento.id: ', documento.id);
  //
  //   });
  // }
  //
  // loadBd() {
  //   // const game = new Game({code: 'DOSOTES', available: false});
  //   this.objeto = this.db.object('games');
  //
  //   this.objeto.valueChanges().subscribe((gamesObject) => {
  //     console.log('gamesObject; ', gamesObject);
  //   });
  //
  //   this.list = this.db.list('games');
  //   // this.list.push(game);
  //   this.list.valueChanges().subscribe((gamesList) => {
  //     console.log('gamesList: ', gamesList);
  //     const  listaKey = Object.keys(gamesList).map(val => {
  //       console.log('val: ', val);
  //       return val;
  //     });
  //     console.log('listaKey: ' , listaKey);
  //   });
  // }
}
