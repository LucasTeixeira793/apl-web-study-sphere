import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnotacaoComponent } from './card-anotacao.component';

describe('CardAnotacaoComponent', () => {
  let component: CardAnotacaoComponent;
  let fixture: ComponentFixture<CardAnotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAnotacaoComponent]
    });
    fixture = TestBed.createComponent(CardAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
