import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private apiUrl = '/api/status';

  constructor(private http: HttpClient) {}

  getStatus(intervalMs = 30000): Observable<any[]> {
    return timer(0, intervalMs).pipe(switchMap(() => this.http.get<any[]>(this.apiUrl)));
  }
}
