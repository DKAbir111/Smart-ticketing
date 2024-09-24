const seatBundle = [];
const grandTotal = document.getElementById("grand-total");


function selectSeat(event) {
    const seatName = event.innerText;
    if (seatBundle.includes(seatName)) {
        // Remove selected seat from the array
        alert("Seat already selected!");
        return;
    }
    // push total selected seat in an array
    seatBundle.push(seatName);
    if (seatBundle.length === 4) {
        document.getElementById("apply-coupon").classList.remove("btn-disabled");
    }
    if (seatBundle.length > 4) {
        alert("Maximum seats selected!");
        return;
    }

    // Price of seat
    document.getElementById("total-price").innerHTML = parseFloat(document.getElementById("total-price").innerText) + 550;
    //grand total
    grandTotal.innerText = parseFloat(grandTotal.innerText) + 550;
    // Update remaining seats
    document.getElementById("seat-left").innerText = parseFloat(document.getElementById("seat-left").innerText) - 1;
    // Hide no seat added yet
    document.getElementById("no-seat").classList.add("hidden");
    // Change seat count
    document.getElementById("seat-count").innerText = seatBundle.length;
    // Change selected seat color
    event.classList.add("bg-primary", "hover:bg-primary", "text-white");
    // Add seat details to the DOM
    document.getElementById("seat-details").innerHTML += `
        <p class="text-stone-500 ">${seatName}</p>
        <p class="text-stone-500 text-center">Economy</p>
        <p class="text-slate-500 text-center">550</p>`
        ;

    //Grand Total
    if (seatBundle.length === 4) {
        document.getElementById("apply-coupon").classList.remove("btn-disabled");
    }

}
let couponCount = 0;
document.getElementById("apply-coupon").addEventListener("click", function () {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "NEW15") {
        grandTotal.innerText = 2200 * 0.85;
        couponCount++;
        document.getElementById("coupon-code").value = '';
        document.getElementById("apply-coupon").classList.add("btn-disabled")
    }
    else if (couponCode === "Couple 20") {
        grandTotal.innerText = 2200 * 0.80;
        couponCount++;
        document.getElementById("coupon-code").value = '';
        document.getElementById("apply-coupon").classList.add("btn-disabled")
    }
    else {
        alert("Invalid coupon code!");
        return;
    }
});

// Enable "confirm-ticket" button when phone number has 5 or more digits
document.getElementById("phone-number").addEventListener("keyup", function (event) {
    let number = event.target.value;
    if (number.length >= 5) {
        document.getElementById("confirm-ticket").classList.remove("btn-disabled");
    } else {
        document.getElementById("confirm-ticket").classList.add("btn-disabled"); // Disable button again if the number is less than 5 digits
    }
});

// Add click event to "confirm-ticket" button
document.getElementById("confirm-ticket").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior if needed, e.g., form submission
    console.log("Ticket confirmed!");
});
