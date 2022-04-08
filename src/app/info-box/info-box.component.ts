// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-info-box',
//   templateUrl: './info-box.component.html',
//   styleUrls: ['./info-box.component.css']
// })
// export class InfoBoxComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent  {
  @Input() signupTitle = 'Sign up for our newsletter';
  @Input() thankyouMessage = 'Thanks!';

  formData = { name: '', email: '' };
  formSubmitted = false;

  constructor() { }

  onSubmit() {
    this.formSubmitted = true;
  }
}
