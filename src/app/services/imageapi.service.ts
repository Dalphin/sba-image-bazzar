import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImageapiService {

  public loader: Boolean = true;

  private base_uri = "http://localhost:4000/imagebazzar";
  private category_url: string = "http://localhost:4000/imagebazzar/categories";
  private img_category_url: string = "./assets/api/image-category.json";
  private contact_details_url = "./assets/api/contact-details.json";
  private img_details_url =  "./assets/api/image-details.json";
  private purchased_details_url = "./assets/api/purchased-details.json";

  constructor(private http: Http) { }

  showLoader() {
    this.loader = true;
  }
  hideLoader() {
    this.loader = false;
  }

  errorHandler(err) {
    return Observable.throw(err || 'Server internal error');
  }

  getCategories(){
    this.showLoader();
    return this.http.get(this.base_uri+"/categories")
      .map(res => res.json(), this.hideLoader() )
      .catch(this.errorHandler);
  }

  getImageCategory(id){
    this.showLoader();
    return this.http.get(this.base_uri+"/img-category/"+id)
      .map(res => res.json(), this.hideLoader())
      .catch(this.errorHandler);
  }

  getConatctDetails() {
    return this.http.get(this.base_uri+"/contact-details")
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  getImageDetails(id){
    this.showLoader();
    return this.http.get(this.base_uri+"/img-details/"+id)
      .map(res => res.json(), this.hideLoader())
      .catch(this.errorHandler);
  }
  getPurchaseDetails(obj){
    let result = {
      purchasedImage: obj.imgDetails,
      purchasedTimeStamp: obj.timeStamp
    }
    this.showLoader();
    return this.http.post(this.base_uri+"/purchased-details", result)
      .map(res => res.json(), this.hideLoader())
      .catch(this.errorHandler);
  }
}
