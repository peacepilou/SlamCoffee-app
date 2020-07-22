import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/menu.service';
import { Menu } from 'src/app/models/menu';
import { ReviewService } from 'src/app/shared/review.service';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public menus: Menu[] = [];
  public users: User[] = [];
  public favoritedMenu: Menu;
  public reviews: Review[] = [];

  constructor(
    private menuService: MenuService,
    private reviewService: ReviewService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.menuService.getAll().subscribe(menuDatas => {
      this.menus = menuDatas;
      console.log(this.menus);
    });
    this.reviewService.getAll().subscribe(reviewDatas => {
      this.reviews = reviewDatas;
    });
    this.userService.getAll().subscribe(userDatas => {
      this.users = userDatas;
    });
  }
  sortBestMenu(id: number) {
    this.menuService.getById(id).subscribe(datas => {
      this.favoritedMenu = datas;
    });
  }
}
