import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WeatherDataComponent } from '../weather-data/weather-data.component';

@Component({
        selector: 'app-weather-tab',
        templateUrl: './weather-tab.page.html',
        styleUrls: ['./weather-tab.page.scss'],
        standalone: true,
        imports: [IonicModule, CommonModule, FormsModule, WeatherDataComponent]
})
export class WeatherTabPage {

        constructor() { }

}
