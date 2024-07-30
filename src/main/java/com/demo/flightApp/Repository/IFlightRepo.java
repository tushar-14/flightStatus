package com.demo.flightApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.flightApp.Entity.Flights;

@Repository
public interface IFlightRepo extends JpaRepository<Flights, String>{
}
