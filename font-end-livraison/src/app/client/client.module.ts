import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddClientComponent } from './add-client/add-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';


@NgModule({
  declarations: [
    AddClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
