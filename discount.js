//* if ticket amount is less than or equal 100, per ticket price will be: 100 tk
//* if ticket amount is more than 100 but less than or equal 200, first 100 ticket price will be: 100tk and second 100 ticket price will be 90tk
//* if ticket amount is more than 200, per ticket price will be: 70tk

const ticketPrice = (tickets) => {
    const perTicketPriceWithin100 = 100;
    const perTicketPriceMoreThan100LessThan200 = 90;
    const perTicketPriceMoreThan200 = 70;
    if (tickets <= 100) {
        const totalTicketPrice = tickets * perTicketPriceWithin100
        return totalTicketPrice
    } else if (tickets > 100 && tickets <= 200) {
        const first100TicketsPrice = perTicketPriceWithin100 * perTicketPriceWithin100;
        const restTickets = tickets - 100;
        const restTicketsPrice = restTickets * perTicketPriceMoreThan100LessThan200;
        const totalTicketPrice = first100TicketsPrice + restTicketsPrice;
        return totalTicketPrice;
    } else if (tickets > 200) {
        const first100TicketsPrice = perTicketPriceWithin100 * 100;
        const second100TicketsPrice = perTicketPriceMoreThan100LessThan200 * 100;
        const restTickets = tickets - 200;
        const restTicketsPrice = restTickets * perTicketPriceMoreThan200;
        const totalTicketPrice = first100TicketsPrice + second100TicketsPrice + restTicketsPrice;
        return totalTicketPrice;
    }
}
const totalTicketPrice = ticketPrice(101);
console.log(totalTicketPrice)
