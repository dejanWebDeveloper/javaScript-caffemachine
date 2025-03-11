
let coffeMachine = {
    water: 400, //stanje popunjenosti posude sa vodom - max400
    coffe: 200, //stanje popunjenosti posude sa kafom - max200
    milk: 100, //stanje popunjenosti posude sa mlekom - max100
    credit: 100, //stanje kredita u dinarima - pocetna vrednost 100
    errorMessage : [],
    waterStatus: function() {
       document.getElementById('water-status').innerText = this.water;
    },
    addWater: function () {
        let amount = prompt('Amount?');
        amount = Number(amount);
        if (isNaN(amount)) {
            alert('Entered value is not a number\n');
            this.addWater();
        } else if (amount <= 0) {
            alert('Entered value is negative');
            this.addWater();
        } else if (Number.isInteger(amount) === false) {
            alert('Entered value is not a integer\n');
            this.addWater();
        } else {//ako su ispunjeni uslovi za vrednost amount ->
            if (this.water + amount >= 400) {
                this.water = 400;
            } else {
                this.water += amount;
            }

        }
        this.waterStatus();
    },
    emptyWater: function (quantity, error) {
        if (quantity <= this.water) {
            this.water -= quantity;
            this.waterStatus();
            document.getElementById('message').innerText = 'Pouring water';
        } else {
            document.getElementById('message').innerText = 'Machine is out of water\n';
        }

    },
    coffeStatus: function () {
        document.getElementById('coffee-status').innerText = this.coffe;
    },
    addCoffe: function () {
        let amount = prompt('Amount?');
        amount = Number(amount);
        if (isNaN(amount)) {
            alert('Entered value is not a number\n');
        } else if (amount <= 0) {
            alert('Entered value is negative');
        } else if (Number.isInteger(amount) === false) {
            alert('Entered value is not a integer');
        } else {//ako su ispunjeni uslovi za vrednost amount ->
            if (this.coffe + amount >= 200) {
                this.coffe = 200;
            } else {
                this.coffe += amount;
            }

        }

        this.coffeStatus();
    },
    emptyCoffe: function (quantity) {
        if (quantity <= this.coffe) {
            this.coffe -= quantity;
            this.coffeStatus();
            document.getElementById('message').innerText = 'Pouring coffe.';
        } else {
            document.getElementById('message').innerText = 'Machine is out of coffe\n';

        }
    },
    milkStatus: function () {
        document.getElementById('milk-status').innerText = this.milk;
    },
    addMilk: function () {
        let amount = prompt('Amount?');
        amount = Number(amount);
        if (isNaN(amount)) {
            alert('Entered value is not a number\n');
        } else if (amount <= 0) {
            alert('Entered value is negative');
        } else if (Number.isInteger(amount) === false) {
            alert('Entered value is not a integer');
        } else {//ako su ispunjeni uslovi za vrednost amount ->
            if (this.milk + amount >= 100) {
                this.milk = 100;
            } else {
                this.milk += amount;
            }

        }
        this.milkStatus();
    },
    emptyMilk: function (quantity) {
        if (quantity <= this.milk) {
            this.milk -= quantity;
            this.milkStatus();
            document.getElementById('message').innerText = 'Pouring milk';
        } else {
            document.getElementById('message').innerText = 'Machine is out of milk\n';

        }
    },
    creditStatus: function () {
        document.getElementById('credit').innerText = this.credit + ' ';
    },
    addCredit: function () {
        let amount = prompt('Amount?');
        amount = Number(amount);
        if (isNaN(amount)) {
            alert('Entered value is not a number\n');
        } else if (amount <= 0) {
            alert('Entered value is negative');
        } else if (Number.isInteger(amount) === false) {
            alert('Entered value is not a integer');
        } else {//ako su ispunjeni uslovi za vrednost amount ->
            this.credit += amount;
        }
        this.creditStatus();
    },
    emptyCredit: function (price) {
        if (price <= this.credit) {
            this.credit -= price;
            this.creditStatus();
        } else {
            var errorMessage = 'No enought money.';
            document.getElementById('message').innerText = 'No enought money.';
        }
    },
    makeShortEspresso: function () {
        if (this.credit < 30) {
            this.emptyCredit(30);
            return;
        } else if (this.water < 20) {
            this.emptyWater(20);
            return;
        } else if (this.coffe < 10) {
            this.emptyCoffe(10);
            return;
        } else {
            document.getElementById('message').innerText = 'Prepairing SHORT ESPRESSO';
            this.emptyCredit(30);
            setTimeout(this.emptyWater.bind(this), 1000, 20);
            setTimeout(this.emptyCoffe.bind(this), 2000, 10);
            setTimeout(function () {
                document.getElementById('message').innerText = 'SHORT ESPRESSO finished';
            },
                    3000);

        }
    },
    makeLongEspresso: function () {
        if (this.credit < 40) {
            this.emptyCredit(40);
            return;
        } else if (this.water < 40) {
            this.emptyWater(40);
            return;
        } else if (this.coffe < 10) {
            this.emptyCoffe(10);
            return;
        } else {
            document.getElementById('message').innerText = 'Prepairing LONG ESPRESSO';
            this.emptyCredit(40);
            setTimeout(this.emptyWater.bind(this), 1000, 40);
            setTimeout(this.emptyCoffe.bind(this), 2000, 10);
            setTimeout(function () {
                document.getElementById('message').innerText = 'LONG ESPRESSO finished';
            },
                    3000);

        }
    },
    makeCapuchino: function () {
        if (this.credit < 50) {
            this.emptyCredit(50);
            return;
        } else if (this.water < 20) {
            this.emptyWater(20);
            return;
        } else if (this.coffe < 10) {
            this.emptyCoffe(10);
            return;
        } else if (this.milk < 10) {
            this.emptyMilk(10);
            return;
        } else {
            document.getElementById('message').innerText = 'Prepairing CAPUCHINO';
            this.emptyCredit(50);
            setTimeout(this.emptyWater.bind(this), 1000, 20);
            setTimeout(this.emptyCoffe.bind(this), 2000, 10);
            setTimeout(this.emptyMilk.bind(this), 3000, 10);
            setTimeout(function () {
                document.getElementById('message').innerText = 'CAPUCHINO finished';
            },
                    4000);

        }
    }




};
coffeMachine.waterStatus();
coffeMachine.coffeStatus();
coffeMachine.milkStatus();
coffeMachine.creditStatus();
function statusItem(elementID, item){
 document.getElementById(elementID).innerText = item;
 }
console.log(coffeMachine.errorMessage);