import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather, ForecastWeather } from './weather';

@Injectable({
        providedIn: 'root'
})
export class WeatherService {
        private API_KEY: string = 'bf0915f4258b41ae952145838240401';

        constructor(
                private http: HttpClient
        ) { }

        getCurrentWeather(location: string): Observable<CurrentWeather> {
                return this.http.get<CurrentWeather>(`https://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${location}`);
        }

        getForecast(location: string, days: number): Observable<ForecastWeather> {
                return this.http.get<ForecastWeather>(`https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${location}&days=${days}`)
        }
}
