import { Component, Input } from "@angular/core";

@Component({
  selector: "change-btn",
  template: `
    <button>
      Zmiana!
    </button>
  `,
  styles: [
    `
      button {
        background: #454f86;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 20px;
      }

      button:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    `
  ]
})
export class ChangeBtn {}
