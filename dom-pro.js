function yt() {
    const buttonElement = document.querySelector('.sub-button');
    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    }
    else {
        buttonElement.innerHTML = 'Subscribe';
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost');
    let cost = Number(inputElement.value);

    if (cost < 40) {
        cost += 10;
    }

    document.querySelector('.js-totalcost').innerHTML = `$${cost}`;
}

function handling(event) {
    console.log(event.key);
    if (event.key === 'Enter') {
        calculateTotal();
    }
}