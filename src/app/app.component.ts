import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  bannerdata: IBanner[] = [];
  categorydata: ICategory[] = [];
  bannerarray: IBanner[] = [{
    id: 1,
    src: './../assets/images/Homebanner.png'
  },
  {
    id: 2,
    src: './../assets/images/download2.jpg'
  }];
  categoryarray: ICategory[] = [{
    id: 1,
    src: './../assets/images/allcategory.png',
    name: '',
    count: ''
  },
  {
    id: 2,
    src: './../assets/images/qwsd.png',
    name: 'Accesories',
    count: '25'
  }, {
    id: 3,
    src: './../assets/images/bags.png',
    name: 'Bags',
    count: '25'
  },
  {
    id: 4,
    src: './../assets/images/Men.png',
    name: 'Men',
    count: '25'
  }, {
    id: 5, src: './../assets/images/women.png',
    name: 'Women',
    count: '25'
  },
  {
    id: 5, src: './../assets/images/Watch.png',
    name: 'Watch',
    count: '25'
  }];
  bestpricearray: IBestPriceProduct[] = [{
    id: 1,
    src: './../assets/images/Image6.png',
    name: 'Travel Bag',
    price: 25
  },
  {
    id: 2,
    src: './../assets/images/Image7.png',
    name: 'School Bag',
    price: 25
  }];
  productarray: IProduct[] = [{
    id: 1,
    src: './../assets/images/Image1 .png',
    name: 'Smart Wache',
    price: 25
  }, {
    id: 1,
    src: './../assets/images/Image1 .png',
    name: 'Smart Wache',
    price: 35
  },
  {
    id: 2,
    src: './../assets/images/Image2 .png',
    name: 'Smart Wache1',
    price: 65
  },
  {
    id: 3,
    src: './../assets/images/Image3.png',
    name: 'Smart Wache2',
    price: 85
  },
  {
    id: 4,
    src: './../assets/images/Image4.png',
    name: 'Smart Wache3',
    price: 25
  },
  {
    id: 5,
    src: './../assets/images/Image5.png',
    name: 'Smart Wache6',
    price: 25
  },
  {
    id: 6,
    src: './../assets/images/Image6.png',
    name: 'School Bag',
    price: 25
  },
  {
    id: 7,
    src: './../assets/images/Image7.png',
    name: 'College Bag',
    price: 25
  },
  ];
  test(): void {

  }
  effect = 'scrollx';
}

class IBanner {
  id: number;
  src: string;


}
class ICategory {
  id: number;
  src: string;
  name: string;
  count: string;

}
class IBestPriceProduct {
  id: number;
  src: string;
  name: string;
  price: number;

}
class IProduct {
  id: number;
  src: string;
  name: string;
  price: number;

}
