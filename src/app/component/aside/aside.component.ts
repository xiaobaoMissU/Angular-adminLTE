import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Jquery 引入
declare var $: any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [MenuService]
})
export class AsideComponent implements OnInit {

  constructor(private menuService: MenuService,
              private route: ActivatedRoute,
              private router: Router) { }

  private menus: any[] = [];

  ngOnInit() {
    console.log('aside component loaded!'); // 测试component加载
    console.log($('.content-wrapper')); // 测试Jquery使用

    for (let i = 0 ; i < 3 ; i++) {
      const menu: any = {};
      menu.id = i;
      menu.name = '菜单' + i;
      menu.url = '/test/' + i;
      this.menus.push(menu); // 模拟后台请求到菜单数据
    }
    this.menuService.getMemus().subscribe(data => this.menus = data['data']); // 测试http请求
  }


  gotoPage(menu: any) {
    console.log(menu); // 测试click事件函数响应
    this.router.navigate([menu.url, { id: menu.id}]); // 测试代码跳转路由 、 传值
  }
}
