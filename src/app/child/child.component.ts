import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentName:string='';
  @Output() onNameChange:EventEmitter<string>=new EventEmitter<string>();
  name:string="hello";
  enteredName:string="lakshmi";

  constructor() { }

  ngOnInit(): void {
    console.log("Hello init")
  }
  onInputChange(event:string):void{
    this.onNameChange.emit(event);
  }
}
