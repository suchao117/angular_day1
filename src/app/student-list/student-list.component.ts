import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  github:string,
  sex:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    console.log("sortUsers Works!1111");
    this.users.sort(function(a,b){
     // console.log(a.id);
     // console.log(b.id);
// console.log(a.id - b.id);
      //   return a.id - b.id;
      let ret = 0;
      if(type == "") {

        return Math.random()>50 ? -1 : 1;
      }
         let ret = 0;
         if (a.id > b.id) {
          console.log(1);
          ret = 1;
          
        }
        if (a.id < b.id) {
          console.log(0);
          ret = -1;
        }
        if(type == "desc") {
          if(ret == -1){
            ret = 1;
          } else {
            if(ret == 1){
             ret = -1;
            }
          };
        }
    
        return ret;
    })
  }
  loadUsersData(){
    this.users = [
      {id:1,name:"Ryane",github:"ryanemax",sex:"male"},
      {id:2,name:"Liming",github:"liming",sex:"male"},
      {id:3,name:"Xiaohong",github:"xiaohong",sex:"female"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"Jack",
      github:"Jack",
      sex:"male"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
