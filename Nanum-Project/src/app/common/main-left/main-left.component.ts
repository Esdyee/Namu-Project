import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-main-left',
  //templateUrl: './main-left.component.html',
  template:`
    <div class="grid_2">
    <!--TODO: component 분리(ASAP)-->
      <div class="sidebar">
        <h1 class="sidebar_header mat-h1">피드</h1>
        <div class="sidebar_lists">
          <ul class="sidebar_filters mat-caption">
            <li><a href="#"><i class="material-icons">whatshot</i>인기글</a></li>
            <li><a href="#"><i class="material-icons">bookmark_border</i>북마크한 답변</a></li>
            <li><a href="#"><i class="material-icons">trending_up</i>최신 글</a></li>
          </ul>
          <div class="sidebar_edit mat-caption">
            <span><i class="material-icons">folder_special</i>내 토픽</span><a href="#">edit</a>
          </div>
          <ul class="sidebar_topics mat-caption">
            <li><a href="#">토픽 1</a></li>
            <li><a href="#">토픽 2</a></li>
            <li><a href="#">토픽 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
  
  constructor(private menu: MenuService) { }

  ngOnInit() {
    this.menu.selMainMenu;
  }


}
