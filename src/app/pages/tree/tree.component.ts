import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { IntegralUIModule } from 'integralui-web/integralui.module';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnDestroy {

  constructor(private breadServ: BreadcrumbService) {
    // TODO
    
  }

   public ngOnInit() {
    // setttings the header for the home
    this.breadServ.set({
      description: 'Natzi',
      display: true,
      header: 'TreeView',
      levels: [
        {
          icon: 'tree',
          link: ['/tree'],
          title: 'Tree'
        }
      ]
    });
  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }
  

}
  
