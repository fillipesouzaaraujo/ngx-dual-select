import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listItems = [
    { nomeDoSetor: 'B SETOR - CONTROLADORIA GERAL' },
    { nomeDoSetor: 'A SETOR - CONTROLADORIA DE PROCESSOS' },
    { nomeDoSetor: 'MINISTÉRIO DAS FINANÇAS - CONTROLADORIA DE PROCESSOS' },
  ];

  title = 'ngx-dual-select';

  emitter($event: any) {
    console.log($event);
  }
}
