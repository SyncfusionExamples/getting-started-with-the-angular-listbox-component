import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListBoxComponent, ListBoxModule, CheckBoxSelection } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'

ListBoxComponent.Inject(CheckBoxSelection);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public data: { [key: string]: Object }[] = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Cricket'},
    { id: 'game3', sports: 'Football'},
    { id: 'game4', sports: 'Golf'},
    { id: 'game5', sports: 'Tennis'},
    { id: 'game6', sports: 'Basket Ball'},
    { id: 'game7', sports: 'Base Ball'},
    { id: 'game8', sports: 'Hockey'},
    { id: 'game9', sports: 'Volley Ball'}
];

public fieldSettings = {
    text: "sports",
    value: "id"
 }

 public selection = { mode: "Single", showCheckbox: false }
}
