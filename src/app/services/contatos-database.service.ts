import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosDatabaseService {
  
meusContatos:Contato[] = [];
enviarContato= new EventEmitter();
  constructor() { }

  setContato(novoContato:Contato):void{
    this.meusContatos.push(novoContato);
    this.enviarContato.emit(this.meusContatos);
  }
  getContato(id:number):Contato{
    let contato: Contato;
    contato = this.meusContatos[id];
    return contato;
  }
}
