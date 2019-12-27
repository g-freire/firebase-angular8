import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exp';
  items:any
  items2

  constructor(private firestore: AngularFirestore) { }

  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("items")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }
  getCoffeeOrder() {
    // let response = this.firestore.collection("items").snapshotChanges();
    let response = this.firestore.collection("items").valueChanges();
    return response
    
  }
  

  onSubmit() {
    const data = { "name": "foo" }
    this.createCoffeeOrder(data)
      .then(res => {
        console.log("done")
      });
  }


  onSubmitGet() {
    // this.items = this.firestore.collection('items').valueChanges().subscribe(result => {
    //   this.items = result;
    // })
    
    this.getCoffeeOrder().subscribe(result => {
      this.items2 = result;
    })

    return this.items2
      
  }


}
