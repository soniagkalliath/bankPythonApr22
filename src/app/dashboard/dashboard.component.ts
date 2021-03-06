import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   //depositForm
  depositForm = this.fb.group({
  
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

    //withdrawForm
    withdrawForm = this.fb.group({
  
      acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      amount: ['',[Validators.required,Validators.pattern('[0-9]*')]]
  
    })

    user:any

  constructor(private ds:DataService,private fb:FormBuilder) {
    this.user = this.ds.currentUsername
   }

  ngOnInit(): void {
  }

  deposit(){
  var acno = this.depositForm.value.acno
  var pswd = this.depositForm.value.pswd
  var amount = this.depositForm.value.amount
  if(this.depositForm.valid){
//call deposit in dataservice
const result = this.ds.deposit(acno,pswd,amount)
if(result){
  alert(amount+" deposited successfully and new balance is: "+result)
}
  }
  else{
    alert("Invalid Form")
  }

  }


  withdraw(){
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    if(this.withdrawForm.valid){
 //call deposit in dataservice
 const result = this.ds.withdraw(acno,pswd,amount)
 if(result){
   alert(amount+" debited successfully and new balance is: "+result)
 }
    }
    else{
      alert("Invalid Form")
    }
 
  }

}
