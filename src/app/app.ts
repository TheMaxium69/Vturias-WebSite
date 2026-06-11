import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly langService = inject(TyroUiLangService);

  public PROJECT_NAME = 'Vturias';
  public PROJECT_LOGO = 'assets/tyrolium-ui/projects/Vturias.png';

  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>Vturias</strong> is a <strong>French VTubing agency</strong> dedicated to creating, promoting, and growing virtual talent. A <em>Tyrolium</em> project, born from the partnership with VTuber AuroreTVv.`
      : `<strong>Vturias</strong> est une <strong>agence de VTubing française</strong> dédiée à la création, la promotion et le développement des talents virtuels. Un projet <em>Tyrolium</em>, né du partenariat avec la VTubeuse AuroreTVv.`
  );

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Home',     link: '/',          icon: 'ri-home-line' },
          { label: 'About',    ancreHost: '/', ancre: 'about',     icon: 'ri-information-line' },
          { label: 'Talents',  ancreHost: '/', ancre: 'talents',   icon: 'ri-star-line' },
          { label: 'Join Us',  ancreHost: '/', ancre: 'join', icon: 'ri-user-add-line' },
          { label: 'Contact',  href: 'https://tyrolium.fr/contact?from=vturias',   icon: 'ri-mail-line' },
        ]
      : [
          { label: 'Accueil',        link: '/',        icon: 'ri-home-line' },
          { label: 'À propos',       ancreHost: '/', ancre: 'about',   icon: 'ri-information-line' },
          { label: 'Talents',        ancreHost: '/', ancre: 'talents', icon: 'ri-star-line' },
          { label: 'Nous rejoindre', ancreHost: '/', ancre: 'join',    icon: 'ri-user-add-line' },
          { label: 'Contactez-nous', href: 'https://tyrolium.fr/contact?from=vturias', icon: 'ri-mail-line' },
        ]
  );

  public socials: ITyroUiNavbarPages[] = [
      { label: 'instagram',   link: 'https://www.instagram.com/vturias_project/',   icon: 'ri-instagram-line' },
      { label: 'x', link: 'https://twitter.com/Vturias_Project',          icon: 'ri-twitter-x-fill' },
      { label: 'youTube',     link: 'https://www.youtube.com/@VturiasProject',      icon: 'ri-youtube-fill' },
      { label: 'discord',     link: 'https://discord.gg/nUc8kED8st',                icon: 'ri-discord-fill' },
      { label: 'linkedin',    link: 'https://www.linkedin.com/company/vturias/',    icon: 'ri-linkedin-fill' },
      { label: 'tiktok',      link: 'https://www.tiktok.com/@vturias_project',      icon: 'ri-tiktok-fill' },
  ];
}
