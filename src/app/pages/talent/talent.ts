import { Component, computed, inject, signal, HostListener, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TyroUiLangService } from 'tyrolium-ui';
import { TALENTS } from '../../data/talents.data';

@Component({
  selector: 'app-talent',
  imports: [RouterLink],
  templateUrl: './talent.html',
  styleUrl: './talent.css',
  encapsulation: ViewEncapsulation.None,
})
export class TalentPage {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(TyroUiLangService).lang;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map(p => p.get('slug') ?? ''))
  );

  readonly talent = computed(() =>
    TALENTS.find(t => t.slug === this.slug()) ?? null
  );

  readonly gallery = computed(() => {
    const t = this.talent();
    if (!t) return [];
    const imgs = [t.images.avatar, t.images.simple];
    if (t.images.chibi) imgs.push(t.images.chibi);
    return [...imgs, ...t.images.others];
  });

  lightboxIndex = signal<number | null>(null);

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxIndex.set(null);
    document.body.style.overflow = '';
  }

  prev() {
    const i = this.lightboxIndex();
    if (i === null) return;
    const len = this.gallery().length;
    this.lightboxIndex.set((i - 1 + len) % len);
  }

  next() {
    const i = this.lightboxIndex();
    if (i === null) return;
    const len = this.gallery().length;
    this.lightboxIndex.set((i + 1) % len);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.lightboxIndex() === null) return;
    if (e.key === 'ArrowLeft')  this.prev();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'Escape')     this.closeLightbox();
  }
}
