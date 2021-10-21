import { Component, OnInit } from '@angular/core';
import {HomepageService} from "../../../services/homepage.service";

export interface Quote {
  quote: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {

  quote?: Quote;

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getQuote().subscribe(data => {
      console.log(data);
      this.quote = data;
    })
  }

}
