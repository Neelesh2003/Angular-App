import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isMenuOpen = false;

  rightList = [
    { label: "Home", icon: "home", link: "home" },
    { label: "About", icon: "info", link: "about" },
    { label: "Education", icon: "school", link: "education" },
    { label: "Projects", icon: "work", link: "projects" },
    { label: "Contact", icon: "contacts", link: "contact" },
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.rightList, event.previousIndex, event.currentIndex);
  }

scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 90; 
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

 onToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      document.body.style.background = "#ffffff"; 
    } else {
      document.body.style.background = "#000000"; 
    }
  }

}
