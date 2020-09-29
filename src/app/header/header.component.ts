import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}


@Component({
  template: ''
})
export class DialogEntryComponent {

  constructor(public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TicketDialogComponent,{});

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}