import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JoinComponent } from './join/join.component';
import { PollolocoComponent } from './polloloco/polloloco.component';
import { DabubbleComponent } from './dabubble/dabubble.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacypolicyComponent } from './legal/privacypolicy/privacypolicy.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'join', component: JoinComponent },
    { path: 'polloloco', component: PollolocoComponent },
    { path: 'dabubble', component: DabubbleComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacypolicyComponent }
];
