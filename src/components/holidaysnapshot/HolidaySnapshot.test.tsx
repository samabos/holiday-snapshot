import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HolidaySnapshot from './HolidaySnapshot'

test('renders Holiday Snapshot text', () => {
    render(<HolidaySnapshot currentBooked={0} currentRemaining={0} />);
    const linkElement = screen.getByText(/Holiday Snapshot/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Holiday Snapshot text', () => {
    render(<HolidaySnapshot currentBooked={0} currentRemaining={0} />); 
    const bookedText = screen.getByText(/Booked/); // Check for the presence of "Booked"
    const remainingText = screen.getByText(/Remaining/); // Check for the presence of "Remaining"
   
    expect(bookedText).toBeInTheDocument();
    expect(remainingText).toBeInTheDocument();
});

test('renders Holiday Snapshot text', () => {
    render(<HolidaySnapshot currentBooked={0} currentRemaining={0} />); 
    const showButton = screen.getByText(/Show detail/); // Check for the presence of "Show detail"
    const requestButton = screen.getByText(/New request/); // Check for the presence of "New request"
   
    expect(showButton).toBeInTheDocument();
    expect(requestButton).toBeInTheDocument();
});

test('it should have initial value of 0 and 10', () => {
    render(<HolidaySnapshot currentBooked={0} currentRemaining={10} />);
    const booked = screen.queryByText(0);
    const remaining = screen.queryByText(10);
    expect(booked).toBeVisible();
    expect(remaining).toBeVisible();
});

test('it should display an error for invalid input values', () => {
    // Test with invalid input values (non-integer)
    const { container } = render(<HolidaySnapshot currentBooked={0.5} currentRemaining={10} />);
    const errorMessage = container.querySelector('div');
    expect(errorMessage).toHaveTextContent('Error: Invalid input values');
    
    // Test with negative values
    const { container: container2 } = render(<HolidaySnapshot currentBooked={-5} currentRemaining={10} />);
    const errorMessage2 = container2.querySelector('div');
    expect(errorMessage2).toHaveTextContent('Error: Invalid input values');
  
  });

test('it should increase booked value and update remaining when "New request" is clicked', () => {
    render(<HolidaySnapshot currentBooked={0} currentRemaining={10} />);
    const newRequest = screen.getByText('New request');
    //console.log(newRequest);
    fireEvent.click(newRequest);
    const booked = screen.queryByText(1);
    const remaining = screen.queryByText(9);
    expect(booked).toBeVisible();
    expect(remaining).toBeVisible();
});

test('it should increase booked value and update remaining when "New request" is clicked 3', () => {
    render(<HolidaySnapshot currentBooked={40} currentRemaining={50} />);
    const newRequest = screen.getByText('New request');
    //console.log(newRequest);
    fireEvent.click(newRequest);
    fireEvent.click(newRequest);
    fireEvent.click(newRequest);
    const booked = screen.queryByText(43);
    const remaining = screen.queryByText(47);
    expect(booked).toBeVisible();
    expect(remaining).toBeVisible();
});