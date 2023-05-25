import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ControllerService } from '../services/http/general-controller/controller.service';
import { Observable } from 'rxjs';
import { FullInfo } from '../interfaces/full-info.model';
@Injectable({
  providedIn: 'root',
})
export class FullInfoResolver implements Resolve<Observable<FullInfo>> {
  constructor(private router: Router, private surveyService: ControllerService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<FullInfo> {
    return this.surveyService.getFullInfo(+route.paramMap.get('id'));
  }
}
