import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoBoxComponent} from "./info-box.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class InfoBoxModule { }
