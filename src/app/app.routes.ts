import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JoinComponent } from './join/join.component';
import { PollolocoComponent } from './polloloco/polloloco.component';
import { DabubbleComponent } from './dabubble/dabubble.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacypolicyComponent } from './legal/privacypolicy/privacypolicy.component';
import { ContactComponent } from './main/contact/contact.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { SkillsComponent } from './main/skills/skills.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: '#join', component: JoinComponent },
    { path: '#polloloco', component: PollolocoComponent },
    { path: '#dabubble', component: DabubbleComponent },
    { path: '#pokedex', component: PokedexComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacypolicyComponent },
    { path: 'main', component: MainComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'skills', component: SkillsComponent }


];
