import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/shared/review.service';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/shared/menu.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  @Input() public isPutReview: boolean;
  @Input() public currentIndex: number;
  @Input() public titleCurrentlyEdited: boolean;
  @Output() public sendisPutReviewToParent: EventEmitter<boolean> = new EventEmitter();
  @Output() public sendTitleCurrentlyEditedToParent: EventEmitter<boolean> = new EventEmitter();

  menuId: number;
  public review: Review = new Review();
  submitted = false;

  constructor(private menuService: MenuService,
              private reviewService: ReviewService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(datas => {
      this.menuId = +datas.get('id');
      this.menuService.getById(this.menuId).subscribe(menuDatas => {
        this.review.menu = menuDatas;
        console.log(this.review.menu);

      });
    });
  }
  onSubmit() { this.submitted = true; }
  togglePutReviewAndEditing(bolean) {
    this.isPutReview = bolean;
    this.titleCurrentlyEdited = bolean;
    this.sendisPutReviewToParent.emit(bolean);
    this.sendTitleCurrentlyEditedToParent.emit(bolean);
  }
  postReview() {
    this.reviewService.postReview(this.review).subscribe();
    window.location.reload();
  }
  editReview() {
    this.review.id = this.currentIndex;
    this.review.menu.id = this.menuId;
    this.review.menu.reviews = [];
    console.log(this.review);
    this.reviewService.putReview(this.currentIndex, this.review).subscribe();
    window.location.reload();
  }
}
