import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ISvalid:boolean=true;
  Change_radio(valid){
   this.ISvalid=valid;
  }
  constructor(){
    console.log("Hi This component");
  }
  title = 'Angular7app';

//   @HostListener('click',['$event'])
// onhostclick(event:Event){
// alert("Hello learn Hostlistner");s
// }

}
