import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms'; //

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  public city: string = 'Dallas'; // Default city
  public currentWeather: any;
  public forecast: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather(): void {
    if (!this.city) {
      alert('Please enter a city');
      return;
    }

    this.weatherService.getCurrentWeather(this.city).subscribe(
      (data) => {
        this.currentWeather = data;
        console.log('Current weather data received:', data);
      },
      (error) => {
        console.error('Error fetching current weather data', error);
        alert('Error fetching current weather data. Please try again.');
      }
    );

    this.weatherService.getForecast(this.city).subscribe(
      (data) => {
        this.forecast = data.list;
        console.log('Forecast data received:', data);
      },
      (error) => {
        console.error('Error fetching forecast data', error);
        alert('Error fetching forecast data. Please try again.');
      }
    );
  }

  kelvinToFahrenheit(kelvin: number): number {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  }
}
