import { Component, inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.service';

interface MenuOption {
  icon:string,
  label: string,
  route: string,
  subLabel: string,
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {
  gifService = inject(GifService)
  menuOptions: MenuOption[] =[
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/treding'
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Buscador',
      subLabel: 'Buscador',
      route: '/dashboard/search'
    }
    ]

}
