import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WeatherService } from '../weather.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ForecastWeather } from '../weather';

@Component({
    selector: 'app-weather-data',
    templateUrl: './weather-data.component.html',
    styleUrls: ['./weather-data.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class WeatherDataComponent implements OnInit {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    private DAYS: number = 7;

    public loading$: Observable<boolean> = this._loading.asObservable();
    public location!: string;
    public weather!: ForecastWeather;

    @Input() at!: string;

    constructor(
        private weatherService: WeatherService
    ) { }

    ngOnInit() {
        this.showProgressBar();
        if (this.at) {
            this.weatherService.getForecast(this.at, this.DAYS).subscribe((weather) => {
                this.location = `${weather.location.name}, ${weather.location.region}`;
                this.weather = weather;
                this.hideProgressBar();
            });
        } else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.weatherService.getForecast(`${position.coords.latitude},${position.coords.longitude}`, this.DAYS).subscribe((weather) => {
                    this.location = 'Current Location';
                    this.weather = weather;
                    this.hideProgressBar();
                });
            });
        }
    }

    showProgressBar() {
        this._loading.next(true);
    }

    hideProgressBar() {
        this._loading.next(false);
    }
}
