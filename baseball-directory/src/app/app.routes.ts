import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DirectoryComponent} from "./directory/directory.component";

/**
 * Created by mikem on 2/25/2017.
 */


export const AppRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'directory/:id', component: DirectoryComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
