import { Component, OnInit } from '@angular/core';

interface Options {
  value: number;
  label: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  genders: Options[] = [
    {value: 1, label: 'Male'},
    {value: 2, label: 'Female'},
    {value: 3, label: 'Unknown'},
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
