import { Component } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  changeData(eve : any){
    console.log(eve.target.value)
    if(eve.target.value === 'email'){
      document.getElementById('eId')?.classList.remove('d-none')
      document.getElementById('ph')?.classList.add('d-none')
    }
    else if(eve.target.value === 'phone'){
      document.getElementById('ph')?.classList.remove('d-none')
      document.getElementById('eId')?.classList.add('d-none')
    }
}
}
