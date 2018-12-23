import { Component, ViewChild } from '@angular/core';
import {ModalModule} from "ng2-modal";
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epione';
  constructor(public dialog: MatDialog) {
    
  }


  onStart(){
  console.log("starting")
  }

  onFinished(){
    console.log("finishing")
  }

  


  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   
    });
  }
}
