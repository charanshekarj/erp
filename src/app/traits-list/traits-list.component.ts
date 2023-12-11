import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-traits-list',
  templateUrl: './traits-list.component.html',
  styleUrls: ['./traits-list.component.scss']
})
export class TraitsListComponent implements OnInit {

  traits;
  len;
  showSub:boolean=false;
  //hoverIndex:number = -1;
  hideElement = true;

  constructor(private productService: ProductService) { }

  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations'
  };

  ngOnInit(): void {
    this.traits=this.productService.getJSON();
    this.len=[1,2,3,4];
    console.log(this.traits);
  }

  activeTab: number = 0;

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  onHover(){
    this.traits.showSub = 'true';
   }

   onLeave(){
    this.traits.showSub = 'true';
   }

}

