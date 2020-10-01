import { TicketState } from './../services/ticket-state.service';
import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})

export class TicketDialogComponent implements OnInit {
  ticketForm: FormGroup;
  title: string;
  editMode: boolean = false;

  summary: string;
  column: string;
  editTaskId: number;

  //@ViewChild('summaryInput', { static: true }) summaryInputRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ticketStateService: TicketState
    ) {}
    
    ngOnInit(): void {

      // to check whether we are using right param
      this.route.queryParams.subscribe(
        (param: Params) => {
         // console.log(param);
          if(param['dialog']=== 'new') {
            this.editMode = false;
          }
          else if(param['dialog']=== 'edit'){
            this.editMode= true;
            this.column = param['column'];
            this.editTaskId = +param['task'];
          }
        }
      );

      if(this.editMode){
        this.title = "Update Ticket";
        this.summary = this.ticketStateService.getTaskDetails(this.column, this.editTaskId);
        console.log(this.summary);
      }else{
        this.title = "New Ticket";
        this.summary = "";
      }

      this.ticketForm = this.formBuilder.group({
        summary: [this.summary]
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    // addNewTicket(){
    //   this.ticketState.addNewTicket(this.summaryInputRef.nativeElement.value);
    //   this.dialogRef.close();
    // }

    onSubmit(){
      if(this.editMode){
        this.ticketStateService.updateTicket(this.column, this.editTaskId, this.ticketForm.value['summary']);
      }else{
        this.ticketStateService.addNewTicket(this.ticketForm.value['summary']);
      }
      this.dialogRef.close();
      //console.log(this.ticketForm.value['summary']);
    }

}
