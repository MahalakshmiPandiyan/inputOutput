import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string='';
  childName:string='';
  onChildNameChange(event:string):void {
    this.childName=event;
  }
}
