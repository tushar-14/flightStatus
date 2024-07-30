package com.demo.flightApp.Service;

import java.util.Optional;

import com.demo.flightApp.Entity.Flights;

public interface IFlightService {

	public Optional<Flights> flightStatus(String flightId);
	
	public Flights addFlights(Flights flight);
}
