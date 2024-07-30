package com.demo.flightApp.Entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "Flight")
public class Flights {
	
	@Id
	@Column(name = "Id")
	private String flightId;
	
	@Column(name = "airline")
	private String airline;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "dep_gate")
	private String departureGate;
	
	@Column(name = "arr_gate")
	private String arrivalgate;
	
	@Column(name = "sch_dep")
	private LocalDateTime scheduledDeparture;
	
	@Column(name = "acc_dep")
	private LocalDateTime actualDeparture;
	
	@Column(name = "sch_arr")
	private LocalDateTime scheduledArrival;
	
	
	@Column(name = "acc_arr")
	private LocalDateTime actualArrival;
	
	@OneToMany(targetEntity = Notification.class ,cascade = CascadeType.ALL)
	@JoinColumn(name = "flight_id" , referencedColumnName = "Id")
	private List<Notification> notifications;
	
	public Flights() {}

	public Flights(String flightId, String airline, String status, String departureGate, String arrivalgate,
			LocalDateTime scheduledDeparture, LocalDateTime actualDeparture, LocalDateTime scheduledArrival,
			LocalDateTime actualArrival, List<Notification> notifications) {
		super();
		this.flightId = flightId;
		this.airline = airline;
		this.status = status;
		this.departureGate = departureGate;
		this.arrivalgate = arrivalgate;
		this.scheduledDeparture = scheduledDeparture;
		this.actualDeparture = actualDeparture;
		this.scheduledArrival = scheduledArrival;
		this.actualArrival = actualArrival;
		this.notifications = notifications;
	}
	
	public List<Notification> getNotifications() {
		return notifications;
	}
	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}
	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setDepartureGate(String departureGate) {
		this.departureGate = departureGate;
	}
	public void setArrivalgate(String arrivalgate) {
		this.arrivalgate = arrivalgate;
	}
	public void setScheduledDeparture(LocalDateTime scheduledDeparture) {
		this.scheduledDeparture = scheduledDeparture;
	}
	public void setActualDeparture(LocalDateTime actualDeparture) {
		this.actualDeparture = actualDeparture;
	}
	public void setScheduledArrival(LocalDateTime scheduledArrival) {
		this.scheduledArrival = scheduledArrival;
	}
	public void setActualArrival(LocalDateTime actualArrival) {
		this.actualArrival = actualArrival;
	}
	public String getFlightId() {
		return flightId;
	}
	public String getAirline() {
		return airline;
	}
	public String getStatus() {
		return status;
	}
	public String getDepartureGate() {
		return departureGate;
	}
	public String getArrivalgate() {
		return arrivalgate;
	}
	public LocalDateTime getScheduledDeparture() {
		return scheduledDeparture;
	}
	public LocalDateTime getActualDeparture() {
		return actualDeparture;
	}
	public LocalDateTime getScheduledArrival() {
		return scheduledArrival;
	}
	public LocalDateTime getActualArrival() {
		return actualArrival;
	}
	
	

}

