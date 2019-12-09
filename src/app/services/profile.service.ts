import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '947b5917e35509f9d697';
  private clientsecret =  '043bfb031bd753a4cc7b39840c62f97f4fa63c5e';
  http: any;

  constructor(private httpClient) {
    console.log('service is now ready!');
    this.username = 'Mburiah';
   }

   getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid +
     '&client_secret=' + this.clientsecret) .map(res => res.json());
    }
}
