import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';
import { TALENTS } from '../../data/talents.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly lang = inject(TyroUiLangService).lang;
  readonly talents = TALENTS;

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
