import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from "ionic-cache";
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  characterKeyGroup = 'characterCacheGroup';
  ttlCache = 60 * 60 * 24 * 30;

  constructor(private http: HttpClient, private cache: CacheService) { }

  getCharacters() {
    const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=65f4d81fbff7b4bbb64334d24d92f184&hash=8c3f620440a9e41442f715109297a774';
    let request = this.http.get<any>(url);
    return this.cache.loadFromDelayedObservable(url, request, this.characterKeyGroup, this.ttlCache, 'all').pipe(map(res => res));
  }
}
