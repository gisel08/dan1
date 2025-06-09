import { Gif } from './../interfaces/gif.interface';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from './../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

/* {
'thundercats':[gif1],[gif2],[gif3],

} */

const GIF_KEY='gifs';


const loadFromLocalStorage=()=>{
  const gifsFromLocalStorage=localStorage.getItem(GIF_KEY) ?? '{}';//Record<string, gifs[]>
  const gifs= JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
}



@Injectable({providedIn: 'root'})

export class GifService {

  private http=inject(HttpClient);//app.config.ts para la instancia

  trendingGifs= signal<Gif[]>([]);// arreglo de Gifs
  trendingGifsLoading=signal(true);//

  searchHistory=signal<Record<string,Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys=computed(()=>Object.keys(this.searchHistory()));

constructor(){

  this.loadTrendingGifs();
  console.log('Servicio creado');
}

saveGifsToLocalStorage = effect(() => {
  const historyString =JSON.stringify(this.searchHistory());
  localStorage.setItem(GIF_KEY,historyString);

})


loadTrendingGifs(){

  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
    params:{
      api_key:environment.giphyApiKey,
      limit:30,
    },
  }).subscribe((resp)=>
  {
    const gifs= GifMapper.mapGiphyItemsToGifArray(resp.data);
    this.trendingGifs.set(gifs);
    this.trendingGifsLoading.set(false);//Para terminar de cargar la instancia
    console.log(gifs);
  });
}

searchGifs(query: string): Observable<Gif[]>{

  return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
    params:{
      api_key:environment.giphyApiKey,
      limit:30,
      q: query,
    },
  }).pipe(
    map(({ data }) => data),
    map(( items ) => GifMapper.mapGiphyItemsToGifArray(items)),

    tap((items)=>{
      this.searchHistory.update((history)=>({
        ...history,
        [query.toLowerCase()]:items,
      }));
    })
  );


  /* .subscribe((resp)=>
  {
    const gifs= GifMapper.mapGiphyItemsToGifArray(resp.data);

    console.log({search: gifs});

}); */
}

getHistoryGifs(query:string): Gif[]{
  return this.searchHistory()[query]??[];//sino encuentra la llave regresa un arreglo vacio
}

}