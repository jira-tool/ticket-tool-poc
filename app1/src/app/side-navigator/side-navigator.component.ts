import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-navigator',
  standalone: true,
  imports: [MatSidenavModule, MatSelectModule, MatListModule],
  templateUrl: './side-navigator.component.html',
  styleUrl: './side-navigator.component.css'
})
export class SideNavigatorComponent {

}
