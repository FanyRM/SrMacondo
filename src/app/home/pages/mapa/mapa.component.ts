import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditAcercaDeService } from '../../../services/edit-acerca-de.service';
import { Dato } from '../../../interfaces/dato';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: ``
})
export class MapaComponent implements OnInit {
  formDato: FormGroup;
  id: number;
  operacion: string = 'Agregar ';


  constructor( private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private _editAcercaDeService: EditAcercaDeService
    ) {
    this.formDato = this.fb.group({
      id: 1,
      Banc_Nom: ['', [Validators.required, Validators.maxLength(30)]],
      Clabe_InterBanc: ['', [Validators.required, Validators.maxLength(18)]],
      Num_Cuenta: ['', [Validators.required, Validators.maxLength(10)]],
      Img_QR: ['', [Validators.maxLength(300)]],
      Info_Empresa: ['', [Validators.maxLength(30000)]],
    })

    this.id = this.aRoute.snapshot.params['id'] || 1;
  }

  ngOnInit(): void {
    this.getDato(this.id);
  }

  getDato(id: number) {
    this._editAcercaDeService.getDato(id).subscribe((data: Dato) => {
      this.formDato.setValue({
        id: data.id || 1,
        Banc_Nom: data.Banc_Nom,
        Clabe_InterBanc: data.Clabe_InterBanc,
        Num_Cuenta: data.Num_Cuenta,
        Img_QR: data.Img_QR,
        Info_Empresa: data.Info_Empresa
      });
    });
  }
}
