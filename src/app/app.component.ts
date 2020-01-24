import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {s
  
student:any[];
  // public dietSelection='';
 
//   set_dropdow(drp:any){
  
// console.log(this.dietSelection=drp.target.value);
//   }
  // ISvalid:boolean=true;
  // Change_radio(valid){
  //  this.ISvalid=valid;
  // }
  // constructor(){
  //   console.log("Hi This component");
  // }
  title = 'Angular7app';

//   @HostListener('click',['$event'])
// onhostclick(event:Event){
// alert("Hello learn Hostlistner");s
// }

constructor(){
  this.student=[
    {
    id:1,
    name:'Rohan',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:2,
    name:'Ankur',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:3,
    name:'Mohit',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:4,
    name:'Vikas',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:5,
    name:'Kartik',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:6,
    name:'Ashsih',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:7,
    name:'Sachin',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:8,
    name:'Manu',
    gender:'male',
    age:26,
    course:'Mca'

  }
];
}
getMorestudent():void{
  this.student=[
    {
    id:1,
    name:'Rohan',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:2,
    name:'Ankur',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:3,
    name:'Mohit',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:4,
    name:'Vikas',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:5,
    name:'Kartik',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:6,
    name:'Ashsih',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:7,
    name:'Sachin',
    gender:'male',
    age:26,
    course:'Mca'
  },
    {
    id:8,
    name:'Manu',
    gender:'male',
    age:26,
    course:'Mca'

  },
  {
    id:9,
    name:'Tanu',
    gender:'Female',
    age:26,
    course:'Mca'

  }
];

}
trackbystudent(index:number,student:any):string{
return student.id;
}
}
