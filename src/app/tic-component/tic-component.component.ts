import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-component',
  templateUrl: './tic-component.component.html',
  styleUrls: ['./tic-component.component.css']
})

export class TicComponentComponent {
  displaybutn=false;
  player1=0;
  player2=0;
  rep1="";
  rep2="";
  rep3="";
  rep4="";
  rep5="";
  rep6="";
  rep7="";
  rep8="";
  rep9="";
  display=true;


  check_btn1=false; 
  check_btn2=false;
  check_btn3=false;
  check_btn4=false;
  check_btn5=false;
  check_btn6=false;
  check_btn7=false;
  check_btn8=false;
  check_btn9=false;
  check1=false; 
  check2=false;
  check3=false;
  check4=false;
  check5=false;
  check6=false;
  check7=false;
  check8=false;
  check9=false;
  winner=false;
  player_winner="";


reloadpage()
{
  window.location.reload();
}
stoppage()
{
  this.displaybutn=true;
}

  btn_dis()
    {
      this.display=false;
      this.player1=1;
    }
    btn_dis1()
    {
      this.display=false;
      this.player2=1;
    }
  myfunc1(){
  if(this.check_btn1==false)
  {
    if(this.player1==1){
      this.rep1="X";
      this.player2=1;
      this.player1=0;
      this.check1=true;
    }
    else if (this.player2==1){
      this.rep1="O";
      this.player2=0;
      this.player1=1;
      this.check1=true;
    }
    this.check_btn1=true;
    if (
      (this.rep2 === this.rep1 && this.rep1 === this.rep3) ||
      (this.rep7 === this.rep1 && this.rep1 === this.rep4) ||
      (this.rep9 === this.rep1 && this.rep1 === this.rep5)
    ) {
      this.winner=true;
      this.player_winner=this.rep1;
    }
  }
  
  }
  myfunc2(){
    if(this.check_btn2==false)
    {
      if(this.player1==1){
        this.rep2="X";
        this.player2=1;
        this.player1=0;
        this.check2=true;
      }
      else if (this.player2==1){
        this.rep2="O";
        this.player2=0;
        this.player1=1;
        this.check2=true;
      }
      this.check_btn2=true;
      if (
        (this.rep1 === this.rep2 && this.rep2 === this.rep3) ||
        (this.rep5 === this.rep2 && this.rep2 === this.rep8) 
      ) {
        this.winner=true;
        this.player_winner=this.rep2;
      }
    }
  }
  myfunc3(){
    if(this.check_btn3==false)
    {
      if(this.player1==1){
        this.rep3="X";
        this.player2=1;
        this.player1=0;
        this.check3=true;
      }
      else if (this.player2==1){
        this.rep3="O";
        this.player2=0;
        this.player1=1;
        this.check3=true;
      }
      this.check_btn3=true;
      if (
        (this.rep1 === this.rep3 && this.rep3 === this.rep2) ||
        (this.rep6 === this.rep3 && this.rep3 === this.rep9) ||
        (this.rep5 === this.rep3 && this.rep3 === this.rep7)
      ) {
        this.winner=true;
        this.player_winner=this.rep3;
      }
    }
  }
  myfunc4(){
    if(this.check_btn4==false)
    {
      if(this.player1==1){
        this.rep4="X";
        this.player2=1;
        this.player1=0;
        this.check4=true;
      }
      else if (this.player2==1){
        this.rep4="O";
        this.player2=0;
        this.player1=1;
        this.check4=true;
      }
      this.check_btn4=true;
      if (
        (this.rep1 === this.rep4 && this.rep4 === this.rep7) ||
        (this.rep5 === this.rep4 && this.rep4 === this.rep6)
      ) {
        this.winner=true;
        this.player_winner=this.rep4;
      }
    }
  }
  myfunc5(){
    if(this.check_btn5==false)
    {
      if(this.player1==1){
        this.rep5="X";
        this.player2=1;
        this.player1=0;
        this.check5=true;
      }
      else if (this.player2==1){
        this.rep5="O";
        this.player2=0;
        this.player1=1;
        this.check5=true;
      }
      this.check_btn5=true;
      if (
        (this.rep9 === this.rep5 && this.rep5 === this.rep1) ||
        (this.rep2 === this.rep5 && this.rep5 === this.rep8) ||
        (this.rep3 === this.rep5 && this.rep5 === this.rep7) ||
        (this.rep4 === this.rep5 && this.rep5 === this.rep6)
      ) {
        this.winner=true;
        this.player_winner=this.rep5;
      }
    }
  }
  myfunc6(){
    if(this.check_btn6==false)
    {
      if(this.player1==1){
        this.rep6="X";
        this.player2=1;
        this.player1=0;
        this.check6=true;
      }
      else if (this.player2==1){
        this.rep6="O";
        this.player2=0;
        this.player1=1;
        this.check6=true;
      }
      this.check_btn6=true;
      if (
        (this.rep3 === this.rep6 && this.rep6 === this.rep9) ||
        (this.rep4 === this.rep6 && this.rep6 === this.rep5)
      ) {
        this.winner=true;
        this.player_winner=this.rep6;
      }
    }
  }
  myfunc7(){
    if(this.check_btn7==false)
    {
      if(this.player1==1){
        this.rep7="X";
        this.player2=1;
        this.player1=0;
        this.check7=true;
      }
      else if (this.player2==1){
        this.rep7="O";
        this.player2=0;
        this.player1=1;
        this.check7=true;
      }
      this.check_btn7=true;
      if (
        (this.rep7 === this.rep5 && this.rep5 === this.rep3) ||
        (this.rep7 === this.rep4 && this.rep4 === this.rep1) ||
        (this.rep9 === this.rep8 && this.rep8 === this.rep7)
      ) {
        this.winner=true;
        this.player_winner=this.rep7;
      }
    }
  }
  myfunc8(){
    if(this.check_btn8==false)
    {
      if(this.player1==1){
        this.rep8="X";
        this.player2=1;
        this.player1=0;
        this.check8=true;
      }
      else if (this.player2==1){
        this.rep8="O";
        this.player2=0;
        this.player1=1;
        this.check8=true;
      }
      this.check_btn8=true;
      if (
        (this.rep8 === this.rep5 && this.rep5 === this.rep2) ||
        (this.rep8 === this.rep6 && this.rep6 === this.rep9)
        
      ) {
        this.winner=true;
        this.player_winner=this.rep8;
      }
    }
  }
  myfunc9(){
    if(this.check_btn9==false)
    {
      if(this.player1==1){
        this.rep9="X";
        this.player2=1;
        this.player1=0;
        this.check9=true;
      }
      else if (this.player2==1){

        this.rep9="O";
        this.player2=0;
        this.player1=1;
        this.check9=true;
      }
      this.check_btn9=true;
      if (
        (this.rep9 === this.rep5 && this.rep5 === this.rep1) ||
        (this.rep9 === this.rep6 && this.rep6 === this.rep3) ||
        (this.rep9 === this.rep8 && this.rep8 === this.rep7)
      ) {
        this.winner=true;
        this.player_winner=this.rep9;
      }
    }
  }  
  checkedbuttons(){
  if((this.check_btn1)&&
    (this.check_btn2)&&
    (this.check_btn3)&&
    (this.check_btn4)&&
    (this.check_btn5)&&
    (this.check_btn6)&&
    (this.check_btn7)&&
    (this.check_btn8)&&
    (this.check_btn9)) {
      return(true);
  }
  else return(false);
  }
}

