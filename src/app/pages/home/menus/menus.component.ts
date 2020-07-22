import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/menu.service';
import { Menu } from 'src/app/models/menu';
import { ReviewService } from 'src/app/shared/review.service';
import { Review } from 'src/app/models/review';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public menus: Menu[] = [];
  public favoritedMenu: Menu;
  public reviews: Review[] = [];

  constructor(private menuService: MenuService,
              private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.menuService.getAll().subscribe(menuDatas => {
      this.menus = menuDatas;
    });
    this.reviewService.getAll().subscribe(reviewDatas => {
      this.reviews = reviewDatas;
    });
  }
}
