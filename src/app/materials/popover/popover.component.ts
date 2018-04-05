import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor(private _notification: NotificationService) {
  }

  ngOnInit() {
  }

  show() {
    this._notification.info('测试消息', '测试标题', {
      duration: 0
    });
  }

  warn() {
    this._notification.warn('测试消息', '测试标题');
  }

  clear() {
    this._notification.dismiss();
  }

}
