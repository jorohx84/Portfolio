import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JoinComponent } from './join/join.component';
import { PollolocoComponent } from './polloloco/polloloco.component';
import { DabubbleComponent } from './dabubble/dabubble.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'join', component: JoinComponent },
    { path: 'polloloco', component: PollolocoComponent },
    { path: 'dabubble', component: DabubbleComponent },
];
