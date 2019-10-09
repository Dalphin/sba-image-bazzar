import { Component, OnInit } from '@angular/core';

import { ImageapiService } from '../../services/imageapi.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any> = [];
  errorMessage: any;
  loading: Boolean = true;
  constructor(private imageApiService: ImageapiService ) { }

  ngOnInit() {
    this.getCategories();
  }

getCategories() {
  return this.imageApiService.getCategories()
    .subscribe(
      (res => this.categories = res),
      (err => this.errorMessage = err)
      
    )
}

}