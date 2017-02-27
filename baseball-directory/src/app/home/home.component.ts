import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template : '<p>This is inline</p>',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {
  //
  // myName:string = "mike"
  // myBoolean:boolean = true
  // myString:string = "foo"
  //
  // // Custom property binding : app - > home
  // @Input() topLevelPlayer
  //
  // // Output - custom event binding
  // @Output() playerClicked = new EventEmitter();
  // firePlayerClickEvent(e, s) {
  //   this.playerClicked.emit(e);
  // }

  constructor(private loggingService : LoggingService) {

  }

  logIt() {
    this.loggingService.log();
  }

  ngOnInit() {
  }
  //
  // clickMe(message:string) {
  //   alert(message);
  // }

}
