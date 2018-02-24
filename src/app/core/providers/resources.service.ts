import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const RESOURCES_FILE_PATH: string = 'resources/resources.json';

/**
 * Service to handle global application resources
 */
@Injectable()
export class ResourcesService {

    rsc: any;

    constructor(
        private httpClient: HttpClient
    ) { }

    load() {
        const headers: HttpHeaders = new HttpHeaders()
        .append('Cache-Control', 'no-cache')
        .append('Pragma', 'no-cache');

        return new Promise(resolve => {
            this.httpClient.get(RESOURCES_FILE_PATH, { headers: headers })
                .subscribe(
                    (rsc) => {
                        this.rsc = rsc;
                        resolve(true);
                    },
                    (error) => console.log(error),
                    () => console.log('Resources loaded')
                );
        });
    }

    get() {
        return this.rsc;
    }

    store(rsc: any) {
        sessionStorage.setItem('app_resources', null);
        if (rsc) {
            sessionStorage.setItem('app_resources', rsc);
        }
    }

}