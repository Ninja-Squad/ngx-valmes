import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProblemComponent } from '../problem/problem.component';
import { SolutionComponent } from '../solution/solution.component';
import { ConsistencyComponent } from '../consistency/consistency.component';
import { ConfigurationComponent } from '../configuration/configuration.component';
import { SnippetComponent } from '../snippet/snippet.component';
import { GettingStartedComponent } from '../getting-started/getting-started.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValdemortModule } from 'ngx-valdemort';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModelComponent } from '../ng-model/ng-model.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ProblemComponent,
        SolutionComponent,
        ConsistencyComponent,
        ConfigurationComponent,
        NgModelComponent,
        GettingStartedComponent,
        SnippetComponent
      ],
      imports: [ReactiveFormsModule, ValdemortModule, NgbNavModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
