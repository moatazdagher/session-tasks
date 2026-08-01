let orders = [
    { id: 1, status: "valid", stockAvailable: true, amount: 500 },
    { id: 2, status: "cancelled", stockAvailable: true, amount: 300 },
    { id: 3, status: "valid", stockAvailable: false, amount: 200 },
    { id: 4, status: "valid", stockAvailable: true, amount: 700 },
    { id: 5, status: "invalid", stockAvailable: true, amount: 400 },
    { id: 6, status: "valid", stockAvailable: false, amount: 250 },
    { id: 7, status: "valid", stockAvailable: false, amount: 600 },
    { id: 8, status: "valid", stockAvailable: true, amount: 800 }
];

let totalRevenue = 0;
let successfulOrders = 0;
let processedOrders = 0;

let skippedInRow = 0;
let stockFailures = 0;

let stopMessage = "";

for (let i = 0; i < orders.length; i++) {

    let order = orders[i];

    if (
        order.status === "cancelled" ||
        order.status === "invalid" ||
        order.stockAvailable === false
    ) {

        skippedInRow++;

        if (order.stockAvailable === false) {
            stockFailures++;
        }

        if (skippedInRow === 3 || stockFailures === 3) {
            stopMessage = "System stopped due to critical failure";
            break;
        }

        continue;
    }

    totalRevenue += order.amount;
    successfulOrders++;
    processedOrders++;
    skippedInRow = 0;
}

console.log("Total Revenue:", totalRevenue);
console.log("Successful Orders:", successfulOrders);
console.log("Processed Orders:", processedOrders);

if (stopMessage !== "") {
    console.log(stopMessage);
}
function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            return false;
        }

    }

    return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([1, 5, 3, 4]));    
function greaterThan(arr, value) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > value) {
            result.push(arr[i]);
        }

    }

    return result;
}

console.log(greaterThan([2, 7, 4, 10, 15, 3], 5));
