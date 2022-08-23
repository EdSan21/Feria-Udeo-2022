import { Component, OnInit } from '@angular/core';
import { JuradoService } from 'src/app/services/jurado.service';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.scss']
})
export class JuradoComponent implements OnInit {

  juradoList: any = []
  loading = true;

  constructor(private juradoService: JuradoService) { }

  ngOnInit(): void {
    this.juradoService.getJurado().
    subscribe(resp => this.juradoList = resp );
      this.loading=false
  }

}
