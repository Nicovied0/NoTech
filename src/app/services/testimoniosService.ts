import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {
  private linkUrl = environment.backUrl + "/publications/searchByTypePost?typePost=Testimonials";

  constructor(private http: HttpClient) { }

  getTestimonios(): Observable<Testimonios[]> {
    return this.http.get<Testimonios[]>(this.linkUrl).pipe(
      catchError(() => of([]))
    );
  }

}

export interface Testimonios {
  name: string;
  texts: string;
  score: number;
}
