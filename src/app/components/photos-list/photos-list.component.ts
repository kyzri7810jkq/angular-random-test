import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  photos: Object;
  searchTitle: String;

  constructor(private service: PhotosService) { }

  ngOnInit() {
    this.service.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }
  
  searchForm() {
    console.log(this.searchTitle);
    this.service.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }

}
