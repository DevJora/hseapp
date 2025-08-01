import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-agent-form',
  imports: [
    FormsModule
  ],
  templateUrl: './agent-form.html',
  styleUrl: './agent-form.css'
})
export class AgentForm {
  agent = {
    lastName: '',
    firstName: '',
    company: ''
  };
}
