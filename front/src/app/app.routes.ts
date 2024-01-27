import { Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

export const routes: Routes = [
    {'path': '', component: IndexComponent},
    {'path': 'contact', component: ContactComponent},
    {'path': 'authentication', component: AuthenticationComponent}
];
