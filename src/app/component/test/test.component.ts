import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router
  ) { }

  private menuId: number;

  ngOnInit() {
    this.menuId  = Number(this.route.snapshot.paramMap.get('id')); // 路由参数取值
    console.log(this.menuId);
  }

}
