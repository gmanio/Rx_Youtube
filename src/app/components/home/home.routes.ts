import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "../login/login.component";

export const homeRoutes: Routes = [
  { path: '', component: LoginComponent },

];

export const HomeRouter = RouterModule.forChild(homeRoutes);
