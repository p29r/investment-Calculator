import { Component, Input } from '@angular/core';
import type { InvestmentResult } from '../investment-result.model';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //@Input({required:true}) results!:Array<InvestmentResult>;

  //@Input() results?: InvestmentResult[] =;
  constructor(private investmentResultsService: InvestmentResultsService) { }

 get results(){
  return this.investmentResultsService.resultData;
 }
}
