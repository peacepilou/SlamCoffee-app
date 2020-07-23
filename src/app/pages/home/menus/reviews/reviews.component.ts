import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/shared/menu.service';
import { Menu } from 'src/app/models/menu';
import { ReviewService } from 'src/app/shared/review.service';
import { Review } from 'src/app/models/review';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public isPutReview = false;
  public titleCurrentlyEdited: boolean;
  public currentIndex: number;
  public reviewToChild: Review;
  public menu: Menu;

  constructor(private route: ActivatedRoute,
              private menuService: MenuService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(datas => {
      const id = +datas.get('id');
      this.menuService.getById(id).subscribe(menuDatas => {
        this.menu = menuDatas;
      });
    });
  }
  isPutReviewToChild(id, title) {
    this.isPutReview = true;
    this.currentIndex = id;
    this.titleCurrentlyEdited = title;

  }
  receiveIsPutReviewFromChild(bolean) {
    this.isPutReview = bolean;
  }
  receiveTitleCurrentlyEditedFromChild(bolean) {
    this.titleCurrentlyEdited = bolean;
  }
  deleteReview(id){
    if (confirm('Êtes vous sûr de vouloir supprimer cet avis ?')) {
      this.reviewService.deleteReview(id).subscribe();
      window.location.reload();
    }
  }
}
