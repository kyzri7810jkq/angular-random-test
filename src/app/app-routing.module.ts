import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostListsComponent } from './components/post-lists/post-lists.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostListsComponent},
  {path: 'post/create', component: PostCreateComponent},
  {
    path: 'photos', component: PhotosListComponent, 
    children: [
      { path: '', component: PhotosListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModule = [HomeComponent, PostListsComponent, PostCreateComponent, PhotosListComponent ]