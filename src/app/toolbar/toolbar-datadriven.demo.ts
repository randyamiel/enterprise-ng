import { Component, OnInit } from '@angular/core';
import { TOOLBAR_DIRECTIVES } from '../../components/toolbar';
import { SohoButtonComponent } from '../../components/button';
import { SohoMenuButtonComponent } from '../../components/menu-button';

@Component({
    selector: 'toolbar-datadriven-demo',
    templateUrl: 'toolbar-datadriven.demo.html',
    directives: [
      TOOLBAR_DIRECTIVES,
      SohoButtonComponent,
      SohoMenuButtonComponent
    ]
})
export class ToolbarDataDrivenDemoComponent implements OnInit {

  private pageTitle: string;
  private sectionTitle: string;
  private buttons: Array<ToolbarButton> = [];
  private searchField: SearchField;

  constructor() {}

  ngOnInit() {

      this.pageTitle = 'Page Title';
      this.sectionTitle = 'Data Driven Toolbar';

      this.searchField = {
          id    : 'Search',
          label : 'Search Something'
      };

      this.buttons = this.buildToolbarButtonArray();
  }

  private buildToolbarButtonArray(): Array<ToolbarButton> {
    let buttons: Array<ToolbarButton> = [];

    buttons.push({
      id       : 'Create',
      data     : '{\'btn\' : \'create\'}',
      text     : 'Create',
      icon     : 'add',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'charts-btn',
      data     : '{\'btn\' : \'charts\'}',
      icon     : 'pie-chart',
      cssClass : 'btn-menu',
      menu     : [
        {id: 'pie',    text: 'Pie Chart',    data: '{\'menu\': \'pie\'}'},
        {id: 'line',   text: 'Line Chart',   data: '{\'menu\': \'line\'}'},
        {id: 'bubble', text: 'Bubble Chart', data: '{\'menu\': \'bubble\'}'}
      ]
    });

    buttons.push({
      id       : 'update-btn',
      data     : '{\'btn\' : \'update\'}',
      text     : 'Open',
      icon     : 'folder',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'delete-btn',
      data     : '{\'btn\' : \'delete\'}',
      text     : 'Delete',
      icon     : 'delete',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'refresh-btn',
      data     : '{\'btn\' : \'refresh\'}',
      text     : 'Refresh',
      icon     : 'refresh',
      cssClass : 'btn-icon'
    });

    return buttons;
  }
}

interface ToolbarButton {
    id       ?: string;
    cssClass ?: string;
    text     ?: string;
    icon     ?: string;
    data     ?: string;
    menu     ?: any;
}

interface SearchField {
    id    ?: string;
    label ?: string;
    data  ?: string;
}