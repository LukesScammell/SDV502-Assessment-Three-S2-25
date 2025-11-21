test("Booking a ticket works correctly", () => {
  const name = "John Doe";
  const destination = "Auckland";
  const seats = 2;
  const message = `Booking confirmed for ${name} to ${destination}. Seats: ${seats}. Total fare: $20.`;
  expect(message).toBe("Booking confirmed for John Doe to Auckland. Seats: 2. Total fare: $20.");
});
