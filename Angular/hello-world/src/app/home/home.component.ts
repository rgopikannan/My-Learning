import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Welcome User..!';
  salutationList = ['Mr', 'Mrs', 'Dr'];
  number1 = '';
  number2 = '';
  result:any;
  userAPI = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient ) {

  }

  getUserData() {
    this.http.get(this.userAPI).subscribe((res) => {
      console.log(res);
    });
  }

  addNumbers() {
    console.log('buton clicked..');
    this.result = Number(this.number1) +  Number(this.number2);
    this.number1 = '';
    this.number2 = '';
  }
  ngOnInit() {
    this.getUserData();
  }

}
