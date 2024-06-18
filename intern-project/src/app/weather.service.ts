import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'd1dac8cb81581044997e13b160844b09'; // Replace with your API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}`
    );
  }

  getForecast(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}`
    );
  }
}
