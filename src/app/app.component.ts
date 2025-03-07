import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet , FormsModule ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to BridgeLabz';
  userName: string = '';
  bridgeLabzUrl = 'https://www.bridgelabz.com';
  imgUrl = '../assets/BL_logo_square_png.png';
  errorMessage: string = '';
  hurrayMessage: string = '';
  onClick(){
    console.log('Button clicked');
    window.open(this.bridgeLabzUrl, '_blank');
  }


  validateName():void{
    if(!this.userName){
      this.errorMessage = 'Name is Required!';
    }else if(!/^[A-Z][a-zA-Z]{2,}\s[A-Z][a-zA-Z]/.test(this.userName)){
      this.errorMessage = 'Name is start with Capital Letter and min character require is 3!';
    }
    else{
      this.errorMessage = '';
      this.hurrayMessage = 'Hurray! '+this.userName;
    }
  }
}
