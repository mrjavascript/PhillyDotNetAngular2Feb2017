import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

// Firebase
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectoryComponent implements OnInit {

  directoryId:number

  classes = { 'blue': false, 'red': true, 'underline': true}
  showParagraph = false;
  searchTerm:string = "";

  players = [];


  constructor(private route:ActivatedRoute, private dataService:DataService) {

    this.directoryId = route.snapshot.params["id"];
  }

  ngOnInit() {
    // this.dataService.getPlayers().subscribe(
    //
    //   (data) => this.players = data
    //
    // );
    // this.players = this.dataService.getPlayers();
    this.fbGetData();
  }

  fbGetData() {

    firebase.database().ref("/").on("child_added", (snapshot) => {

      this.players.push(snapshot.val());
      // console.log(snapshot.val())
    });

  }

  addPlayerName:string = "";
  addPlayerTeam:string = "";
  fbPostData(playerName, playerTeam) {

    firebase.database().ref("/").push(

      {name: playerName, team: playerTeam}
    );
    alert("Data saved!");

    // Clear the form
    this.addPlayerName = "";
    this.addPlayerTeam = "";


  }

}
