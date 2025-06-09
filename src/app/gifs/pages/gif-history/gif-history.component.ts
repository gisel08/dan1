// import { Component, computed, inject } from '@angular/core';
// import { GifService } from '../../services/gifs.service';
// import { ActivatedRoute } from '@angular/router';
// import { GifListComponent } from '../../components/gif-list/gif-list.component';
// import {toSignal} from '@angular/core/rxjs-interop';
// import {map} from 'rxjs';

// @Component({
//   selector: 'app-gif-history',
//   imports: [GifListComponent],
//   templateUrl: './gif-history.component.html',
//   styleUrl: './gif-history.component.css'
// })
// export class GifHistoryComponent {

//   GifService= inject(GifService)

//   query=toSignal(inject(ActivatedRoute).params.pipe(map((params)=> params ['query'])));

//   gifsByKey=computed(() => this.GifService.getHistoryGifs(this.query()));

// }
