const timeOfDayArray = ['10AM', '11AM', '12PM','1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

function formatId (name){
    const result = name.replace(" ", "");
    return 'pdx' + result;
}

//Contructor function

function Store(minimumCustomers, maximumCustomers, avgCookiesSale, storeName) {
    this.minimumCustomers = minimumCustomers;
    this.maximumCustomers = maximumCustomers;
    this.avgCookiesSale = avgCookiesSale;
    this.storeName = storeName;
    this.cookiesArray = [];
    this.randomCustomersHour = function (){
        const min = this.minimumCustomers;
        const max = this.maximumCustomers;
        for (let i = 0; i < timeOfDayArray.length; i++) {
            const randomCustomersHour = Math.floor(Math.random() * (max - min) + min);
            const avgCookiesPerHour = Math.round(randomCustomersHour * this.avgCookiesSale);
            this.cookiesArray.push(avgCookiesPerHour);
        }
    };

    this.createTd = function () {

        const list = document.getElementById(formatId(this.storeName));

        for (let i = 0; i < this.cookiesArray.length; i++) {
            const td = document.createElement('td');
            td.textContent = this.cookiesArray[i];
            list.appendChild(td);
        }

        const total = document.createElement('td');
        total.textContent = this.calcTotal();
        list.appendChild(total);
    };

    this.calcTotal = function () {
        let total = 0;
        for (let i = 0; i < this.cookiesArray.length; i++) {
            total += this.cookiesArray[i];
        }
        return total;
    };
};

// Instance creator

const pdxPioneerSquare = new Store(17, 88, 5.2, 'Pioneer Square');
const pdxAirport = new Store(6, 24, 1.2, 'Airport');
const pdxWashingtonSquare = new Store(11, 38, 1.9, 'Washington Square');
const pdxSellWood = new Store(20, 48, 3.3, 'SellWood');
const pdxPearlDistrict = new Store(3, 24, 2.6, 'Pearl District');

pdxWashingtonSquare.randomCustomersHour();
pdxWashingtonSquare.createTd();
pdxSellWood.randomCustomersHour();
pdxSellWood.createTd();
pdxPearlDistrict.randomCustomersHour();
pdxPearlDistrict.createTd();
pdxAirport.randomCustomersHour();
pdxAirport.createTd();
pdxPioneerSquare.randomCustomersHour();
pdxPioneerSquare.createTd();