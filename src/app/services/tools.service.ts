import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  formOption(use_authorization = false, token = null,parameter) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    if (use_authorization) {
      if (token == null) {
        token = '';
      }
      options['headers']['Authorization'] = token;
      //options['body']['Authorization']=parameter;
    }
    ///console.log("Option "+options);
    return options;
  }
}
