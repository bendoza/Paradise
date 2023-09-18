import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheetScrapeService {

  bourbons: string[][] = [];
  closeOutLiquors: string[][] = [];
  cognacs: string[][] = [];
  gins: string[][] = [];
  liqueurs: string[][] = [];
  mixers: string[][] = [];
  RTDs: string[][] = [];
  rums: string[][] = [];
  ryes: string[][] = [];
  scotch: string[][] = [];
  tequilas: string[][] = [];
  vodkas: string[][] = [];
  whiskeys: string[][] = [];
  flavoredWhiskeys: string[][] = [];
  wineBaseds: string[][] = [];
  wineBasedLiquors: string[][] = [];

  cabernetFrancs: string[][] = [];
  cabernetSauvignons: string[][] = [];
  chardonnays: string[][] = [];
  closeOutWines: string[][] = [];
  interestingReds: string[][] = [];
  interestingWhites: string[][] = [];
  malbecs: string[][] = [];
  merlots: string[][] = [];
  neroDAvolas: string[][] = [];
  redBlends: string[][] = [];
  roses: string[][] = [];
  sangioveses: string[][] = [];
  sauvignonBlancs: string[][] = [];
  shiraz: string[][] = [];
  sparklings: string[][] = [];
  whiteBlends: string[][] = [];
  zinfandels: string[][] = [];

  constructor(private http: HttpClient) { }

  getProductData(): void {

    fetch('https://paradise-397019.ue.r.appspot.com/GetProductData')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] === '') {
          break;
        } 
        else if (data[i][0] === 'Bourbon') {
          this.bourbons.push(data[i]);
        }
        else if (data[i][0] === 'Close Out Liquor') {
          this.closeOutLiquors.push(data[i]);
        }
        else if (data[i][0] === 'Cognac') {
          this.cognacs.push(data[i]);
        }
        else if (data[i][0] === 'Gin') {
          this.gins.push(data[i]);
        }
        else if (data[i][0] === 'Liqueur') {
          this.liqueurs.push(data[i]);
        }
        else if (data[i][0] === 'Mixers') {
          this.mixers.push(data[i]);
        }
        else if (data[i][0] === 'RTD') {
          this.RTDs.push(data[i]);
        }
        else if (data[i][0] === 'Rum') {
          this.rums.push(data[i]);
        }
        else if (data[i][0] === 'Rye') {
          this.ryes.push(data[i]);
        }
        else if (data[i][0] === 'Scotch') {
          this.scotch.push(data[i]);
        }
        else if (data[i][0] === 'Tequila') {
          this.tequilas.push(data[i]);
        }
        else if (data[i][0] === 'Vodka') {
          this.vodkas.push(data[i]);
        }
        else if (data[i][0] === 'Whiskey') {
          this.whiskeys.push(data[i]);
        }
        else if (data[i][0] === 'Flavored Whiskey') {
          this.flavoredWhiskeys.push(data[i]);
        }
        else if (data[i][0] === 'Wine Based') {
          this.wineBaseds.push(data[i]);
        }
        else if (data[i][0] === 'Wine Based Liquor') {
          this.wineBasedLiquors.push(data[i]);
        }
        else if (data[i][0] === 'Cabernet Franc') {
          this.cabernetFrancs.push(data[i]);
        }
        else if (data[i][0] === 'Cabernet Sauvignon') {
          this.cabernetSauvignons.push(data[i]);
        }
        else if (data[i][0] === 'Chardonnay') {
          this.chardonnays.push(data[i]);
        }
        else if (data[i][0] === 'Close Out Wine') {
          this.closeOutWines.push(data[i]);
        }
        else if (data[i][0] === 'Interesting Reds') {
          this.interestingReds.push(data[i]);
        }
        else if (data[i][0] === 'Interesting Whites') {
          this.interestingWhites.push(data[i]);
        }
        else if (data[i][0] === 'Malbec') {
          this.malbecs.push(data[i]);
        }
        else if (data[i][0] === 'Merlot') {
          this.merlots.push(data[i]);
        }
        else if (data[i][0] === 'Nero D\'Avola') {
          this.neroDAvolas.push(data[i]);
        }
        else if (data[i][0] === 'Red Blend') {
          this.redBlends.push(data[i]);
        }
        else if (data[i][0] === 'Rose') {
          this.roses.push(data[i]);
        }
        else if (data[i][0] === 'Sangiovese') {
          this.sangioveses.push(data[i]);
        }
        else if (data[i][0] === 'Sauvignon Blanc') {
          this.sauvignonBlancs.push(data[i]);
        }
        else if (data[i][0] === 'Shiraz') {
          this.shiraz.push(data[i]);
        }
        else if (data[i][0] === 'Sparkling') {
          this.sparklings.push(data[i]);
        }
        else if (data[i][0] === 'White Blend') {
          this.whiteBlends.push(data[i]);
        }
        else if (data[i][0] === 'Zinfandel') {
          this.zinfandels.push(data[i]);
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
}
