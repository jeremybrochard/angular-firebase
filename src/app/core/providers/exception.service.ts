import { Injectable } from '@angular/core';
import { Error } from '../models/error';

@Injectable()
export class ExceptionService {

  constructor() { }

  handleFirebaseException(error: any): Error {
    // To complete...
    return new Error(0, '');
  }

  handleException(error: any): Error {
    // To complete...
    return new Error(0, '');
  }

}
