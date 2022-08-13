import { LightningElement } from "lwc";

export default class App extends LightningElement {
 cNumber = 0;
SubButtonClicked(){
  this.cNumber--;
}
ResetButtonClicked(){
  this.cNumber =0;
}

AddSubButtonClicked(){
  this.cNumber++;
}

}
