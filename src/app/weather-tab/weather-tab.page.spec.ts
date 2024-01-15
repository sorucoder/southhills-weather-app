import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherTabPage } from './weather-tab.page';

describe('WeatherTabPage', () => {
    let component: WeatherTabPage;
    let fixture: ComponentFixture<WeatherTabPage>;

    beforeEach(async(() => {
        fixture = TestBed.createComponent(WeatherTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
