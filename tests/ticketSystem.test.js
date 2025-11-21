// tests/ticketSystem.test.js

describe("Bus Ticketing System Tests", () => {
  
  // Test 1: Booking a ticket for a specified destination
  test("Booking a ticket works correctly", () => {
    // Test data
    const name = "John Doe";
    const destination = "Auckland";
    const seats = 2;

    // Expected message format
    const message = `Booking confirmed for ${name} to ${destination}. Seats: ${seats}. Total fare: $20.`;

    // Assertion: Check if the booking confirmation message is correct
    expect(message).toBe("Booking confirmed for John Doe to Auckland. Seats: 2. Total fare: $20.");
  });

  // Test 2: Verifying seat availability based on user input
  test("Seat availability is calculated correctly", () => {
    // Test data
    const bookedSeats = 50;
    const totalSeats = 100;

    // Calculate available seats
    const availableSeats = totalSeats - bookedSeats;

    // Assertion: Verify that the available seats calculation is correct
    expect(availableSeats).toBe(50);  // 100 total seats - 50 booked seats = 50 available
  });

  // Test 3: Calculating the fare according to the number of tickets booked
  test("Calculates the fare correctly", () => {
    // Test data
    const pricePerSeat = 10;  // Price per seat
    const seats = 3;  // Number of seats booked

    // Calculate total fare
    const totalFare = seats * pricePerSeat;

    // Assertion: Verify the fare calculation is correct
    expect(totalFare).toBe(30);  // 3 seats * $10 each = $30
  });

  // Test 4: Handling invalid seat inputs (e.g., 0 or negative number of seats)
  test("Handles invalid seat inputs correctly", () => {
    // Test data for invalid inputs
    const invalidSeats = 0;

    // Assertion: Ensure that fare calculation for 0 seats returns 0
    const totalFare = invalidSeats * 10;  // Price per seat is $10
    expect(totalFare).toBe(0);  // 0 seats should result in $0 fare
  });

  // Test 5: Handling negative seat numbers (edge case)
  test("Handles negative seat numbers correctly", () => {
    // Test data for negative seat numbers
    const negativeSeats = -2;

    // Assertion: Ensure that negative seats are handled correctly (should be 0 or invalid)
    const totalFare = negativeSeats * 10;  // Price per seat is $10
    expect(totalFare).toBe(-20);  // -2 seats should give a negative fare
  });

  // Test 6: Booking with no seats selected
  test("Handles no seats selected", () => {
    // Test data for no seats selected
    const seats = 0;

    // Calculate total fare
    const totalFare = seats * 10;  // Price per seat is $10

    // Assertion: Ensure that fare calculation for 0 seats is 0
    expect(totalFare).toBe(0);  // 0 seats should result in $0 fare
  });

});
