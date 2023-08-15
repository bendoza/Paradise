import { Component, OnInit } from '@angular/core';
import { SheetScrapeService } from '../sheet-scrape.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wineTypes: any;
  spiritTypes: any;
  index: number = 0;

  key: any;
  id: any;

  productData: any;

  constructor(private scrapeSheetService: SheetScrapeService, private http: HttpClient) {}

  getBourbons(): string[][] {
    return this.scrapeSheetService.bourbons;
  }

  getCognacs(): string[][] {
    return this.scrapeSheetService.cognacs;
  }

  getInterestingReds(): string[][] {
    return this.scrapeSheetService.interestingReds;
  }

  shouldShowTabForSpirits(spiritTypes: string[], targetValue: string): boolean[] {
    return spiritTypes.map(tab => tab.toString().trim() === targetValue);
  }

  shouldShowTabForWine(wineTypes: string[], targetValue: string): boolean[] {
    return wineTypes.map(tab => tab.toString().trim() === targetValue);
  }

  getTabData(tabValue: string): string[][] {

    if (tabValue.toString().trim() == 'Bourbon') {
      let tabData = this.getBourbons();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Cognac') {
      let tabData = this.getCognacs();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Flavored Whiskey') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Gin') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Liqueur') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Mixers') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'RTD') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Rum') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Rye') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Scotch') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Tequila') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Vodka') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Whiskey') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Wine Based') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Wine Based Liquor') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Cabernet Franc') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }
    
    if (tabValue.toString().trim() == 'Cabernet Sauvignon') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Chardonnay') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Interesting Reds') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Interesting Whites') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Malbec') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Merlot') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }
    
    if (tabValue.toString().trim() == 'Nero D\'Avola') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Red Blend') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Rose') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Sangiovese') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Sauvignon Blanc') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Shiraz') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Sparkling') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'White Blend') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Zinfandel') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    return [];
  }


  ngOnInit() {

    this.productData = this.scrapeSheetService.getProductData();

    fetch('http://localhost:443/GetWineTypes')
    .then(response => response.json())
    .then(data => {
      this.wineTypes = data
    })
    .catch(error => {
      console.error(error);
    });

    
    fetch('http://localhost:443/GetSpiritTypes')
    .then(response => response.json())
    .then(data => {
      this.spiritTypes = data
    })
    .catch(error => {
      console.error(error);
    });
  }
}
