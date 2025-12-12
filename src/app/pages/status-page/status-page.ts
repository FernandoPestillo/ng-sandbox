import { Component } from '@angular/core';
import { StatusService } from '../../services/configurations/status-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-page',
  imports: [CommonModule],
  templateUrl: './status-page.html',
  styleUrl: './status-page.scss',
})
export class StatusPage {
  services: any[] = [
    {
      name: 'Auth Service',
      status: 'operational',
      lastUpdate: '2025-01-18T14:25:00Z',
    },
    {
      name: 'Payments API',
      status: 'degraded_performance',
      lastUpdate: '2025-01-18T14:25:00Z',
    },
    {
      name: 'Database Cluster',
      status: 'major_outage',
      lastUpdate: '2025-01-18T14:25:00Z',
    },
  ];

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    // this.statusService.getStatus().subscribe((data) => {
    //   this.services = data;
    // });
  }

  getStatusClass(status: string) {
    return {
      ok: status === 'operational',
      warn: status === 'degraded_performance',
      error: status === 'major_outage' || status === 'partial_outage',
      maintenance: status === 'under_maintenance',
    };
  }
}
