import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userAPI = 'https://jsonplaceholder.typicode.com/users';

  private userLists: Observable<any>;
  constructor(private http: HttpClient) {

  }

  getUserData(){
    this.http.get(this.userAPI).subscribe((res) => {
      console.log(res);
      userLists = res;
    });
  }


}
