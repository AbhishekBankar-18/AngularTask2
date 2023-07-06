import { Component } from '@angular/core';

@Component({
  selector: 'app-form-data2',
  templateUrl: './form-data2.component.html',
  styleUrls: ['./form-data2.component.css']
})
export class FormData2Component {
  changeData(eve : any){
    console.log(eve.target.value)
    if(eve.target.value === 'email1'){
      document.getElementById('eId1')?.classList.remove('d-none')
      document.getElementById('ph1')?.classList.add('d-none')
    }
    else if(eve.target.value === 'phone1'){
      document.getElementById('ph1')?.classList.remove('d-none')
      document.getElementById('eId1')?.classList.add('d-none')
    }
}
}
