import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { Routes, RouterModule } from '@angular/router';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';

registerLocaleData(en);
const ClientRouting: Routes = [
  // {
  //   path: 'client',
  //   loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  // }, {
  //   path: 'clientmanagement',
  //   loadChildren: () => import('./pages/clientmanagement/clientmanagement.module').then(m => m.ClientManagementModule)
  // }, {
  //   path: 'contactmanagement',
  //   loadChildren: () => import('./pages/contactmanagement/contactmanagement.module').then(m => m.ContactManagementModule)
  // }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSpaceModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzTabsModule,
    NzPopoverModule,
    MatIconModule,
    NzDividerModule,
    MatMenuModule,
    RouterModule.forChild(ClientRouting)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
