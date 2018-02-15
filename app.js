'use strict';

const timeOfDayArray = ['10AM', '11AM', '12PM','1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

const pdxPioneerSquare = {

    minimumCustomers: 17,
    maximumCustomers: 88,
    avgCookiesSale: 5.2,
    cookiesArray: [],
    randomCustomersHour: function() {
        const min = this.minimumCustomers;
        const max = this.maximumCustomers;
        for (let i = 0; i < timeOfDayArray.length; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    },
    createLi: function () {
        const list = document.getElementById('pdxPioneerSquare');
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const li = document.createElement('li');
            li.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i];
            list.appendChild(li);
        }
    },
    calcTotal: function () {
        let total = 0;
        for (let i = 0; i < this.cookiesArray.length; i++) {
            total += this.cookiesArray[i];
        }
        return total;
    }
};
pdxPioneerSquare.randomCustomersHour();
pdxPioneerSquare.createLi();

const pdxAirport = {

    minimumCustomers: 6,
    maximumCustomers: 24,
    avgCookiesSale:1.2,
    cookiesArray: [],
    randomCustomersHour: function() {
        const min = Math.ceil(this.minimumCustomers);
        const max = Math.floor(this.maximumCustomers);
        for (let i = 0; i < 10; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min + 1)) + min;
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    },
    createLi: function () {
        const list = document.getElementById('pdxAirport');
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const li = document.createElement('li');
            li.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i]; //
            list.appendChild(li);
        }
    },
};
pdxAirport.randomCustomersHour();
pdxAirport.createLi();

const pdxWashingtonSquare = {

    minimumCustomers: 11,
    maximumCustomers: 38,
    avgCookiesSale: 1.9,
    cookiesArray: [],
    randomCustomersHour: function(){
        const min = Math.ceil(this.minimumCustomers);
        const max = Math.floor(this.maximumCustomers);
        for (let i = 0; i < 10; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min + 1)) + min;
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    },
    createLi: function () {
        const list = document.getElementById('pdxWashingtonSquare');
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const li = document.createElement('li');
            li.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i]; //
            list.appendChild(li);
        }
    }
};
pdxWashingtonSquare.randomCustomersHour();
pdxWashingtonSquare.createLi();

const pdxSellwood = {

    minimumCustomers: 20,
    maximumCustomers: 48,
    avgCookiesSale: 3.3,
    cookiesArray: [],
    randomCustomersHour: function() {
        const min = Math.ceil(this.minimumCustomers);
        const max = Math.floor(this.maximumCustomers);
        for (let i = 0; i < 10; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min + 1)) + min;
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    },
    createLi: function () {
        const list = document.getElementById('pdxSellwood');
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const li = document.createElement('li');
            li.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i]; //
            list.appendChild(li);
        }
    }
};
pdxSellwood.randomCustomersHour();
pdxSellwood.createLi();

const pdxPearlDistrict = {

    minimumCustomers: 3,
    maximumCustomers: 24,
    avgCookiesSale: 2.6,
    cookiesArray: [],
    randomCustomersHour: function (){
        const min = Math.ceil(this.minimumCustomers);
        const max = Math.floor(this.maximumCustomers);
        for (let i = 0; i < 10; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min + 1)) + min;
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    },
    createLi: function () {
        const list = document.getElementById('pdxPearlDistrict');
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const li = document.createElement('li');
            li.textContent = timeOfDayArray[i] + ': ' + this.cookiesArray[i]; //
            list.appendChild(li);
        }
    }
};
pdxPearlDistrict.randomCustomersHour();
pdxPearlDistrict.createLi();