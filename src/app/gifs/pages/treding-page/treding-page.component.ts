import { Component , inject} from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-treding-page',
  imports: [GifListComponent],
  templateUrl: './treding-page.component.html',
  styleUrl: './treding-page.component.css'
})
export default class TredingPageComponent {

  gifService= inject(GifService);

}
