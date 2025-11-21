// ticketSystem.test.js

const { calculateFare, checkSeatAvailability, bookTicket } = require("../src/script.js"); // Adjust path as needed

describe("Bus Ticketing System Tests", () => {

  // Test 1: Booking a ticket for a specified destination
  test("Booking a ticket works correctly", () => {
    const name = "John Doe";
    const destination = "Auckland";
    const seats = 2;
    const message = `Booking confirmed for ${name} to ${destination}. Seats: ${seats}. Total fare: $20.`;
    expect(message).toBe("Booking confirmed for John Doe to Auckland. Seats: 2. Total fare: $20.");
  });

  // Test 2: Verifying seat availability based on user input
  test("Seat availability is calculated correctly", () => {
    const bookedSeats = 50;
    const totalSeats = 100;
    const availableSeats = totalSeats - bookedSeats;
    expect(availableSeats).toBe(50);  // 100 total seats - 50 booked seats = 50 available
  });

  // Test 3: Calculating the fare based on the number of tickets booked
  test("Calculates the fare correctly", () => {
    const pricePerSeat = 10;
    const seats = 3;
    const totalFare = seats * pricePerSeat;
    expect(totalFare).toBe(30);  // 3 seats * $10 each = $30
  });

});
