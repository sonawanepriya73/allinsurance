// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { InfoService } from '../common service/info.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class Auth2Guard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     let roleId = 1;
//     //1 ===>principle
//     //2 ===>staff
//     //3 ===student
//     //4 ===>admin
//     if(roleId ===3){
//      return true; 
//     }else
//       return false;
//   }

//   resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot,myser:InfoService){
//     console.log("Hello this is resolver ");
//     myser.checkStudData().subscribe((res:any) =>{
//       console.log(res);
//     })
//     return true;
//   }








//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
//   canLoad(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }
