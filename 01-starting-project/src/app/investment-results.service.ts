// Use the below code as a help
// e.g., integrate it into a service or component

// You may need to tweak it, depending on where and how you use it

import { Injectable } from "@angular/core";
import { InvestmentInput, InvestmentResult } from "./investment-result.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {
resultData? :InvestmentResult[];

  calculateInvestmentResults(investment: InvestmentInput) {
    //const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    const annualData: InvestmentResult[] = [];
    let investmentValue = investment.initialInvestment;

    for (let i = 0; i < investment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue - investment.annualInvestment * year - investment.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investment.initialInvestment + investment.annualInvestment * year,
      });
    }

   // return annualData;
    this.resultData = annualData;
  }
}
