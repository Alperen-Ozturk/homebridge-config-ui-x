import { Component, OnInit } from '@angular/core';
import { WsService } from '../../../../core/ws.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-system-info-widget',
  templateUrl: './system-info-widget.component.html',
  styleUrls: ['./system-info-widget.component.scss'],
})
export class SystemInfoWidgetComponent implements OnInit {
  private io = this.$ws.getExistingNamespace('status');

  public serverInfo;
  public npmInfo = {} as any;

  constructor(
    private $ws: WsService,
    public $auth: AuthService,
  ) { }

  ngOnInit() {
    this.io.request('get-homebridge-server-info').subscribe((data) => {
      this.serverInfo = data;
      console.log(data);
    });

    this.io.request('npm-version-check').subscribe((data) => {
      this.npmInfo = data;
      console.log(data);
    });
  }

}
