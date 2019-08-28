import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotosInterface } from '../models/Photos';



@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  JSON_URL = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }

  getPhotos(): Observable<PhotosInterface> {
    let data = {albumId: '1'}
    return this.http.get <PhotosInterface> (this.JSON_URL, {
      params: data
    });
  }
}
