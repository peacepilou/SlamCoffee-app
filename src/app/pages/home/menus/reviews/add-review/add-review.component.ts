import { Component, OnInit, Input} from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/shared/review.service';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/shared/menu.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  @Input() public isPutReview;
  @Input() public currentIndex;

  menuId: number;
  public review: Review = new Review();
  constructor(private menuService: MenuService,
              private reviewService: ReviewService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(datas => {
      this.menuId = +datas.get('id');
      this.menuService.getById(this.menuId).subscribe(menuDatas => {
        this.review.menu = menuDatas;
      });
    });
  }
  postReview() {
    this.reviewService.postReview(this.review).subscribe();
    window.location.reload();
  }
  editReview() {
    this.review.id = this.currentIndex;
    this.review.menu = new Menu();
    this.review.menu.id = this.menuId;
    console.log(this.review);
    this.reviewService.putReview(this.currentIndex, this.review).subscribe();
  }
}
