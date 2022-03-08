// //------1.Class - Movie----


// class movie {
//     constructor(title, studio, rating) {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
//     getmovie() {
//         return `the movie ${this.rating}`
//     }
// }

// let movieinfo = new movie("vivegam", "sunpictures", "4.8/5");

// console.log(movieinfo);

// Output movie {title: 'vivegam', studio: 'sunpictures', rating: '4.8/5'}

// -----2.Circle - Class-----

// class Circle {
//   constructor(radius, color) {
//     this.radius = radius;
//     this.color = color;
//   }

//   getradius() {
//     return `Radius= ${this.radius}`;
//   }

//   setradius() {
//     this.radius = newradius;

//     return `New Radius= ${this.radius}`;
//   }

//   getcolor() {
//     return `Color= ${this.color}`;
//   }

//   setcolor() {
//     this.color = newcolor;

//     return `New Color= ${this.color}`;
//   }

//   getArea() {
//     return `Area= ${Math.PI * Math.pow(this.radius, 2)}`;
//   }

//   getCircumference() {
//     return `Circumference= ${2 * Math.PI * this.radius}`;
//   }
// }

// var newradius = 15;

// let newcolor = "green";

// let value = new Circle(5, "red");

// console.log(value.getradius());

// console.log(value.setradius());

// console.log(value.getcolor());

// console.log(value.setcolor());

// console.log(value.getArea());

// console.log(value.getCircumference());

//  Output
//  Radius= 5
//  New Radius= 15
//  Color= red
//  New Color= green
//  Area= 706.8583470577034
//  Circumference= 94.24777960769379


// -----3.Class-person----

// class person {
//   constructor(firstname, lastname, age, education, city, gender) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.education = education;
//     this.city = city;
//     this.gender = gender;
//   }

//   getdetails() {
//     return;
//   }
// }

// var persondetails = new person("Guna", "sgs", 25, "B.E", "DPI", "Male");
// console.log(persondetails);

// output person {firstname: 'Guna', lastname: 'sgs', age: 25, education: 'B.E', city: 'DPI', …}

// ----4.Class-Uber-Price-----

// class Uber {
//   constructor(kilometer, rateperkm, waitingchargepermin, waitingtime) {
//     this.kilometer = kilometer;

//     this.rateperkm = rateperkm;

//     this.waitingchargepermin = waitingchargepermin;

//     this.waitingtime = waitingtime;
//   }

//   totalfare() {
//     let totalcost = this.kilometer * this.rateperkm;

//     if (this.kilometer > 10) return `Totalcost : ${totalcost}`;
//     else
//       totalcost =
//         this.kilometer * this.rateperkm +
//         this.waitingtime * this.waitingchargepermin;

//     return `Totalcost : ${totalcost}`;
//   }
// }

// let uberprice = new Uber(7, 14, 3, 10);

// console.log(uberprice.totalfare());


// //output:Totalcost : 128