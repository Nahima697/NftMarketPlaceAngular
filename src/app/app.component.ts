import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'nftMarketplace';
  constructor(private modalService: NgbModal) {
  }
  ngOnInit(): void {

  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
