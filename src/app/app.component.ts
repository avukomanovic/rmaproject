import { Component, AfterViewInit, OnInit, Injectable } from '@angular/core';
import { RmaModal, CheckBoxex } from './models/rmaModal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {


  ngOnInit(): void {
    this.fb = new FormBuilder();
    this.boxex = new Array<CheckBoxex>();
    this.modalForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    this.box = new CheckBoxex();
    this.box.ostalo = false;
    this.boxex.push(this.box)
    
    return this.fb.group({
      imeiNumber: '',
      display: '',
      glass: '',
      camera: '',
      batery: '',
      mic: '',
      sounds: '',
      conector: '',
      other: '',
      desc: '',
    });
  }

  addItem(): void {
    this.items = this.modalForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(i: number) {
    this.items = this.modalForm.get('items') as FormArray;
    this.items.removeAt(i)
  }

  constructor() { }

  items: FormArray;
  fb: FormBuilder;
  modalForm = new FormGroup({

  });
  box: CheckBoxex;
  boxex: Array<CheckBoxex>;
  title = 'RMA';
  formModal: RmaModal = new RmaModal();

  chageOther(i: number) {
    if (this.boxex[i].ostalo === true) {
      this.boxex[i].ostalo = false;
      return this.boxex[i].ostalo;
    }
    else {
      this.boxex[i].ostalo = true;
      return this.boxex[i].ostalo;
    }
  }

}

