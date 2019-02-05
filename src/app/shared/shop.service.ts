import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from './item.model';

@Injectable()
export class ShopService {

    constructor(private http: HttpClient) { }

    itemsUrl = 'database/items.json';

    getItems(){
        return this.http.get(this.itemsUrl);
    }

}