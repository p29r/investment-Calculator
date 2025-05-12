import { Component, EventEmitter, Output } from '@angular/core';
import type { InvestmentInput } from '../investment-result.model';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() inputValues = new EventEmitter<InvestmentInput>();
  initialInvestment: string = '0';
  annualInvestment: string = '0';
  expectedReturn: string = '5';
  duration: string = '10';

  constructor(private investmentResultsService: InvestmentResultsService) { }

  onSubmit() {
    // this.inputValues.emit({
    //   initialInvestment: +this.initialInvestment,
    //   annualInvestment: +this.annualInvestment,
    //   expectedReturn: +this.expectedReturn,
    //   duration: +this.duration
    // })

    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    })
    this.initialInvestment = '0';
    this.annualInvestment = '0';
    this.expectedReturn = '5';
    this.duration = '10';
  }
}
