import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MfDevelopersComponent } from './mf-sidebar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MfDevelopersComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MfDevelopersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app1'`, () => {
    const fixture = TestBed.createComponent(MfDevelopersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app1');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MfDevelopersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app1!');
  });
});
