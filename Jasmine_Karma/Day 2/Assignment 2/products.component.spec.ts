import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<DeptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create child component elements', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-dept-details'));
    expect(childComponent).toBeTruthy();
  });


  it('should create all child component elements', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-products'));
    expect(childComponents.length).toBe(component.depts.length);
  });

  
