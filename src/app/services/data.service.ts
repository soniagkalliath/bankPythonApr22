import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
    1001:{acno:1001,uname:"Laisha",password:1001,balance:2000},
    1002:{acno:1002,uname:"Vyom",password:1002,balance:4000}
  }
  constructor() { }

  //register

  register(acno:any,password:any,uname:any){

let database = this.database
if(acno in database){
  //acno already existing
  return false
}
else{
  database[acno]={
    acno,
    uname,
    password,
    balance:0
  }
  console.log(database)
  return true
}
  }

  //login
  login(acno:any,pswd:any){
 
    let database =this.database
    
    if(acno in database){
      //acno match
      if(pswd == database[acno]["password"]){
        //pswd match
        return true
        }
      else{
        alert("Incorect Password")
        return false
      }
    }
    else{
      //not exist
      alert("Account does not exist")
      return false
    }
  }

  //deposit
  deposit(acno:any,pswd:any,amt:any){
    var amount = parseInt(amt)
let database = this.database

if(acno in database){
  if(pswd == database[acno]["password"]){
      database[acno]["balance"] += amount
      return database[acno]["balance"]
  }
  else{
    alert("Incorect Password")
    return false
  }
}
else{
  alert("Account does not exist")
  return false
}
  }

    //withdraw
    withdraw(acno:any,pswd:any,amt:any){
      var amount = parseInt(amt)
  let database = this.database
  
  if(acno in database){
    if(pswd == database[acno]["password"]){
      
      if(database[acno]["balance"]>amount){
        database[acno]["balance"] -= amount
        return database[acno]["balance"]
      }
      else{
        alert("Insufficient balance")
      return false
      }
       
    }
    else{
      alert("Incorect Password")
      return false
    }
  }
  else{
    alert("Account does not exist")
    return false
  }
    }
  

}
