package com.demo.flightApp.Controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.flightApp.Entity.Flights;
import com.demo.flightApp.Service.IFlightService;

@RequestMapping("/api")
@RestController
@CrossOrigin("*")
public class flightController {
	
	@Autowired
	IFlightService service;
	
	@RequestMapping("/status")
	public Optional<Flights> flightStatus(@RequestParam("id") String id) {
		return service.flightStatus(id);
	}
	
	@RequestMapping("/add")
	public Flights addFlight(@RequestBody Flights flight) {
		return service.addFlights(flight);
	}
	
}
