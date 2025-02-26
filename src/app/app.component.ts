import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule,RegisterComponent, StepperComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_mat';
}
