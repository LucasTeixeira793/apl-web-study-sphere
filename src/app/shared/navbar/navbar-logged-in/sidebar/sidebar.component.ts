import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isTranslatedUp = false;

  

  toggle(){
    let sidebar = document.querySelector('#sidebar')
    if (sidebar) sidebar.classList.toggle("close");

    const btnToggle = document.querySelector('#myElement') as HTMLElement;
    if (btnToggle) {
      btnToggle.style.transform = this.isTranslatedUp ? 'translateY(-50%)' : 'translateY(50%)';
    }
  }
}
