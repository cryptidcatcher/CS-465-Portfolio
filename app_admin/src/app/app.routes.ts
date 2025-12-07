import { Routes } from '@angular/router';
import { AddTrip } from './add-trip/add-trip';
import { EditTripComponent } from './edit-trip/edit-trip';
import { TripListing } from './trip-listing/trip-listing';


export const routes: Routes = [
    {path: 'add-trip', component: AddTrip},
    {path: 'edit-trip', component: EditTripComponent},
    {path: '', component: TripListing, pathMatch: 'full'}
];
