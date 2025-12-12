import { Component, OnInit } from '@angular/core';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.designer';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-stimulsoft-designer',
  imports: [],
  templateUrl: './stimulsoft-designer.html',
  styleUrl: './stimulsoft-designer.scss',
})
export class StimulsoftDesigner implements OnInit {
  viewer = new Stimulsoft.Designer.StiDesigner(undefined, 'StiDesigner', false);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listar().subscribe((response) => {
      console.log('response', response);
    });

    Stimulsoft.Base.StiLicense.loadFromString(
      '6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkRAoWOWENBBUYxsAJlAX73U4zQw79rappzLAF7SbgOX4WRdSc1vTH/YWoHigo0uhX9mrx7u2FhFxXycBsTjgFw0GnHhXzIglVfu8Efb7t/TtFDOTVag3Dtj3rLWRIX8sx8EAMB2TUz6rHspw8VRnl58dh7e/bj5LS/7AmoxwryGHO1m3gc2FkWfHfAN4qKlHOAPN6EJbXafjmVqaVv2jypV+l/ZBX4q3QHu81XVDSvfz7XFibamc5tYa2HjK1Yq0g6gymYvU2wD3tj6x63FXcIloXEuJqjyx2lRF9PyQzzHhzWH0vZeExBjBK77dDKQwUqrmFthcUQXkF7LHSlzaSPpyERuOlZ5bb1rdjTmuj07YmN/SWBT2Yz186+Xx4TYKpUlXqRl5PhDlfnq0tGlwCpypUX2kH25keHvFJCIsmeNUJWpM/OKBqA6BNR6jmZqn639o9miIX9MOl56BP9TUhkTe5M12d4ZP7pUkj31acAPYh85HAOpmXqqUmBlI0rb+5yPMvq6z75A7bGm4JmHJuh'
    );
    // var report = new Stimulsoft.Report.StiReport();
    // report.loadFile('reports/Invoice.mrt');

    // this.viewer.report = report;
    this.viewer.renderHtml('designer');
  }
}
