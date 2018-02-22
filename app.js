const timeOfDayArray = ['10AM', '11AM', '12PM','1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

//Contructor function

function Store(minimumCustomers, maximumCustomers, avgCookiesSale, storeName) {
    this.minimumCustomers = minimumCustomers;
    this.maximumCustomers = maximumCustomers;
    this.avgCookiesSale = avgCookiesSale;
    this.storeName = storeName;
    this.cookiesArray = [];
    this.randomCustomerHour = function (){
        const min = this.minimumCustomers;
        const max = this.maximumCustomers;
        for (let i = 0; i < timeOfDayArray.length; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    };
}

// Instance creator

let pdxPioneerSquare = new Store(17, 88, 5.2, 'Pioneer Square');
let pdxAirport = new Store(6, 24, 1.2, 'Airport');
let pdxWashingtonSquare = new Store(11, 38, 1.9, 'Washington Square');
let pdxSellWood = new Store(20, 48, 3.3, 'SellWood');
let pdxPearlDistrict = new Store(3, 24, 2.6, 'Pearl District');

// re-watch videos and see how to make table and form with button 




// function Store(minimumCustomers, maximumCustomers, avgCookiesSale) {
//     this.minimumCustomers = minimumCustomers;
//     this.maximumCustomers = maximumCustomers;
//     this.avgCookiesSale = avgCookiesSale;
//     this.randomCustomerHour = function() {
//         const min = this.minimumCustomers;
//         const max = this.maximumCustomers;
//         for (let i = 0; i < timeOfDayArray.length; i++) {
//         const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
//         const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
//         this.cookiesArray.push(avgCookiesPerHour);
//     }
// }

// var stores = [];
// stores.push(new Store(minimumCustomers, maximumCustomers, ))


// const pdxPioneerSquare = {

//     minimumCustomers: 17,
//     maximumCustomers: 88,
//     avgCookiesSale: 5.2,
//     cookiesArray: [],
//     randomCustomersHour: function() {
//         const min = this.minimumCustomers;
//         const max = this.maximumCustomers;
//         for (let i = 0; i < timeOfDayArray.length; i++) {
//             const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
//             const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
//             this.cookiesArray.push(avgCookiesPerHour);
//         }
//     },
//     createTd: function () {
//         const list = document.getElementById('pdxPioneerSquare');
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             const td = document.createElement('td');
//             td.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i];
//             list.appendChild(td);
//         }
//     },
//     calcTotal: function () {
//         let total = 0;
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             total += this.cookiesArray[i];
//         }
//         return total;
//     }
// };
// pdxPioneerSquare.randomCustomersHour();
// pdxPioneerSquare.createTd();

// const pdxAirport = {

//     minimumCustomers: 6,
//     maximumCustomers: 24,
//     avgCookiesSale: 1.2,
//     cookiesArray: [],
//     randomCustomersHour: function() {
//         const min = this.minimumCustomers;
//         const max = this.maximumCustomers;
//         for (let i = 0; i < timeOfDayArray.length; i++) {
//             const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
//             const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
//             this.cookiesArray.push(avgCookiesPerHour);
//         }
//     },
//     createTd: function (){
//         const list = document.getElementById('pdxAirport');
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             const td = document.createElement('td');
//             td.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i];
//             list.appendChild(td);
//         }
//     },
//     calcTotal: function () {
//         let total = 0;
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             total += this.cookiesArray[i];
//         }
//         return total;
//     }
// };
// pdxAirport.randomCustomersHour();
// pdxAirport.createTd();

// const pdxWashingtonSquare = {

//     minimumCustomers: 11,
//     maximumCustomers: 38,
//     avgCookiesSale: 1.9,
//     cookiesArray: [],
//     randomCustomersHour: function() {
//         const min = this.minimumCustomers;
//         const max = this.maximumCustomers;
//         for (let i = 0; i < timeOfDayArray.length; i++) {
//             const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
//             const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
//             this.cookiesArray.push(avgCookiesPerHour);
//         }
//     },
//     createTd: function () {
//         const list = document.getElementById('pdxWashingtonSquare');
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             const td = document.createElement('td');
//             td.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i];
//             list.appendChild(td);
//         }
//     },
//     calcTotal: function () {
//         let total = 0;
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             total += this.cookiesArray[i];
//         }
//         return total;
//     }
// };
// pdxWashingtonSquare.randomCustomersHour();
// pdxWashingtonSquare.createTd();

// const pdxSellWood = {

//     minimumCustomers: 20,
//     maximumCustomers: 48,
//     avgCookiesSale: 3.3,
//     cookiesArray: [],
//     randomCustomersHour: function() {
//         const min = this.minimumCustomers;
//         const max = this.maximumCustomers;
//         for (let i = 0; i < timeOfDayArray.length; i++) {
//             const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
//             const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
//             this.cookiesArray.push(avgCookiesPerHour);
//         }
//     },
//     createTd: function () {
//         const list = document.getElementById('pdxSellWood');
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             const td = document.createElement('td');
//             td.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i];
//             list.appendChild(td);
//         }
//     },
//     calcTotal: function () {
//         let total = 0;
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             total += this.cookiesArray[i];
//         }
//         return total;
//     }
// };
// pdxSellWood.randomCustomersHour();
// pdxSellWood.createTd();

// const pdxPearlDistrict = {

//     minimumCustomers: 3,
//     maximumCustomers: 24,
//     avgCookiesSale: 2.6,
//     cookiesArray: [],
//     randomCustomersHour: function() {
//         const min = this.minimumCustomers;
//         const max = this.maximumCustomers;
//         for (let i = 0; i < timeOfDayArray.length; i++) {
//             const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
//             const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
//             this.cookiesArray.push(avgCookiesPerHour);
//         }
//     },
//     createTd: function () {
//         const list = document.getElementById('pdxPearlDistrict');
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             const td = document.createElement('td');
//             td.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i];
//             list.appendChild(td);
//         }
//     },
//     calcTotal: function () {
//         let total = 0;
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             total += this.cookiesArray[i];
//         }
//         return total;
//     }
// };
// pdxPearlDistrict.randomCustomersHour();
// pdxPearlDistrict.createTd();