import { Empresas } from '../empresas';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {

  empresas: Empresas[] = [];
  formGroupEmpresas: FormGroup;

  constructor(private empresasService: EmpresasService, private FormBuilder: FormBuilder){
    this.formGroupEmpresas = this.FormBuilder.group({
      id: '',
      razao_social: '',
      nome_fantasia: '',
      ramo: '',
      email: '',
      contato: ''
    });
  }

  ngOnInit(): void{
    this.loadEmpresas();
  }

  loadEmpresas(){
    this.empresasService.getEmpresas().subscribe({
      next: data => this.empresas = data,
      error: () => console.log('error')
    })
  }

  save(){
    this.empresasService.save(this.formGroupEmpresas.value).subscribe({
    next: data => {
      this.empresas.push(data);
      this.formGroupEmpresas.reset();
      }
    });
  }

}
