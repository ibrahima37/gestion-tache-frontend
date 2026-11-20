import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next)=> {

  const token = localStorage.getItem('token');
  console.log('INTERCEPTOR APPELÉ pour', req.url, 'TOKEN =', token ? 'OK' : 'NULL');

  const isAuthRoute = req.url.includes('/auth/login') || req.url.includes('/auth/register');

  if (token && !isAuthRoute) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};