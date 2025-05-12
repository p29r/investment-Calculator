import { Component } from '@angular/core';
import type { InvestmentInput, InvestmentResult } from './investment-result.model';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  // investmentResults?: Array<InvestmentResult>;
  // constructor(private investmentResultsService: InvestmentResultsService) { }

  // userInputValues(value: InvestmentInput) {
  //   console.log("inside app Copponent", value);
  //   //this.investmentResults = this.investmentResultsService.calculateInvestmentResults({value.initialInvestment, value.duration, value.expectedReturn, value.annualInvestment});
  //   this.investmentResults = this.investmentResultsService.calculateInvestmentResults(value)
  //   console.log("array =", this.investmentResults);

  // }
}
