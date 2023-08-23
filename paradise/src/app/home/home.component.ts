import { Component, OnInit } from '@angular/core';
import { SheetScrapeService } from '../sheet-scrape.service';
import { HttpClient } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  wineTypes: any;
  spiritTypes: any;
  visitCount: any;
  index: number = 0;

  products: any[] = ["1", "2", "3"];

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

  getFlavoredWhiskeys(): string[][] {
    return this.scrapeSheetService.flavoredWhiskeys;
  }

  getGins(): string[][] {
    return this.scrapeSheetService.gins;
  }

  getLiqueurs(): string[][] {
    return this.scrapeSheetService.liqueurs;
  }

  getMixers(): string[][] {
    return this.scrapeSheetService.mixers;
  }

  getRTDs(): string[][] {
    return this.scrapeSheetService.RTDs;
  }

  getRums(): string[][] {
    return this.scrapeSheetService.rums;
  }

  getRyes(): string[][] {
    return this.scrapeSheetService.ryes;
  }

  getScotch(): string[][] {
    return this.scrapeSheetService.scotch;
  }

  getTequilas(): string[][] {
    return this.scrapeSheetService.tequilas;
  }

  getVodkas(): string[][] {
    return this.scrapeSheetService.vodkas;
  }

  getWhiskeys(): string[][] {
    return this.scrapeSheetService.whiskeys;
  }

  getWineBaseds(): string[][] {
    return this.scrapeSheetService.wineBaseds;
  }

  getWineBasedLiquors(): string[][] {
    return this.scrapeSheetService.wineBasedLiquors;
  }

  getCabernetFranc(): string[][] {
    return this.scrapeSheetService.cabernetFrancs;
  }

  getCabernetSauvignon(): string[][] {
    return this.scrapeSheetService.cabernetSauvignons;
  }

  getChardonnays(): string[][] {
    return this.scrapeSheetService.chardonnays;
  }

  getInterestingReds(): string[][] {
    return this.scrapeSheetService.interestingReds;
  }

  getInterestingWhites(): string[][] {
    return this.scrapeSheetService.interestingWhites;
  }

  getMalbecs(): string[][] {
    return this.scrapeSheetService.malbecs;
  }

  getMerlots(): string[][] {
    return this.scrapeSheetService.merlots;
  }

  getNeroDAvolas(): string[][] {
    return this.scrapeSheetService.neroDAvolas;
  }

  getRedBlends(): string[][] {
    return this.scrapeSheetService.redBlends;
  }

  getRoses(): string[][] {
    return this.scrapeSheetService.roses;
  }

  getSangiovese(): string[][] {
    return this.scrapeSheetService.sangioveses;
  }

  getSauvignonBlanc(): string[][] {
    return this.scrapeSheetService.sauvignonBlancs;
  }

  getShiraz(): string[][] {
    return this.scrapeSheetService.shiraz;
  }

  getSparklings(): string[][] {
    return this.scrapeSheetService.sparklings;
  }

  getWhiteBlends(): string[][] {
    return this.scrapeSheetService.whiteBlends;
  }

  getZinfandels(): string[][] {
    return this.scrapeSheetService.zinfandels;
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
      let tabData = this.getFlavoredWhiskeys();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Gin') {
      let tabData = this.getGins();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Liqueur') {
      let tabData = this.getLiqueurs();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Mixers') {
      let tabData = this.getMixers();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'RTD') {
      let tabData = this.getRTDs();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Rum') {
      let tabData = this.getRums();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Rye') {
      let tabData = this.getRyes();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Scotch') {
      let tabData = this.getScotch();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Tequila') {
      let tabData = this.getTequilas();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Vodka') {
      let tabData = this.getVodkas();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Whiskey') {
      let tabData = this.getWhiskeys();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Wine Based') {
      let tabData = this.getWineBaseds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Wine Based Liquor') {
      let tabData = this.getWineBasedLiquors();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Cabernet Franc') {
      let tabData = this.getCabernetFranc();
      return tabData.map(row => row.slice(1));
    }
    
    if (tabValue.toString().trim() == 'Cabernet Sauvignon') {
      let tabData = this.getCabernetSauvignon();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Chardonnay') {
      let tabData = this.getChardonnays();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Interesting Reds') {
      let tabData = this.getInterestingReds();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Interesting Whites') {
      let tabData = this.getInterestingWhites();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Malbec') {
      let tabData = this.getMalbecs();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Merlot') {
      let tabData = this.getMerlots();
      return tabData.map(row => row.slice(1));
    }
    
    if (tabValue.toString().trim() == 'Nero D\'Avola') {
      let tabData = this.getNeroDAvolas();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Red Blend') {
      let tabData = this.getRedBlends();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Rose') {
      let tabData = this.getRoses();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Sangiovese') {
      let tabData = this.getSangiovese();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Sauvignon Blanc') {
      let tabData = this.getSauvignonBlanc();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Shiraz') {
      let tabData = this.getShiraz();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Sparkling') {
      let tabData = this.getSparklings();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'White Blend') {
      let tabData = this.getWhiteBlends();
      return tabData.map(row => row.slice(1));
    }

    if (tabValue.toString().trim() == 'Zinfandel') {
      let tabData = this.getZinfandels();
      return tabData.map(row => row.slice(1));
    }

    return [];
  }

  shouldShowTabForWine(wineTypes: string[], targetValue: string): boolean[] {
    return wineTypes.map(tab => tab.toString().trim() === targetValue);
  }

  shouldShowTabForSpirits(spiritTypes: string[], targetValue: string): boolean[] {
    return spiritTypes.map(tab => tab.toString().trim() === targetValue);
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

    const url = "http://localhost:443/AddVisit";
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        this.visitCount = data.value;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
