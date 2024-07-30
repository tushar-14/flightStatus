package com.demo.flightApp.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.flightApp.Entity.Flights;
import com.demo.flightApp.Repository.IFlightRepo;

@Service
public class FlightService implements IFlightService{

	@Autowired
	IFlightRepo repo;

	@Override
	public Optional<Flights> flightStatus(String flightId) {
		return repo.findById(flightId);
	}

	@Override
	public Flights addFlights(Flights flight) {
		return repo.save(flight);
	}

}
