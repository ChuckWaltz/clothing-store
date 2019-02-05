import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomePageComponent } from './shop-home-page.component';

describe('StoreHomePageComponent', () => {
  let component: ShopHomePageComponent;
  let fixture: ComponentFixture<ShopHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
