// ES5: Part 1

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
            console.log(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilleds) {
            // yay, you got a new phone
            console.log(fulfilleds);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom didn't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
};

askMom();

