import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { trigger, transition, animate, style, state, group } from '@angular/animations'
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('slideInOut2', [
      state('in', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ]),
  ]
})
@Pipe({
  name: 'search'
})
export class TransactionComponent implements OnInit {



  showAll: boolean = false;
  animationState = 'in';
  transactionForm: FormGroup;

  success = false;

  productname: boolean = true;
  investor: boolean = true;
  cifno: boolean = true;
  options = ['All', 'Options A', 'Options B', 'Options C'];
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      date: [''],
      type: [''],
      status: [''],
      cifno: [''],
      investor: [''],
      productname: ['']
    });
  }

  onSubmit() {


    if (this.transactionForm.invalid) {
      return;
    }

    this.success = true;
  }

  showAllFilter() {

    this.showAll = !this.showAll;
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

  resetFilter() {
    console.log('resetFilter');
  }

  resetInputField(_value) {
    console.log('resetInputField' + _value);
    if (_value == 'cifno') this.transactionForm.controls.cifno.reset(), this.cifno = false;
    if (_value == 'investor') this.transactionForm.controls.investor.reset(), this.investor = false;
    if (_value == 'productname') this.transactionForm.controls.productname.reset(), this.productname = false;

  }

}

