import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string,
  imageAlt: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  @Input() galleryData: Item[] = [];
  @Input() showCount = false;


  previewImg = false;
  showMask = false;
  currentLightBoxImg: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImgCount = 0;

  
  ngOnInit(): void {
    this.totalImgCount = this.galleryData.length;
  }

  onPreviewImg(index: number) {
    this.showMask = true;
    this.previewImg = true;
    this.currentIndex = index;
    this.currentLightBoxImg = this.galleryData[index];
  }

}
