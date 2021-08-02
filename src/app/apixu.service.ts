import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient ) { }
  getWeather(location : any){
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=4843b82f5c58c20308d450e8336ab0a1&query=${location}`
    )

  }
}
