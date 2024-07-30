package com.demo.flightApp.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "notification")
public class Notification {
	
	@Id
	@Column(name = "not_id")
	private String notificationId;

    private String message;
    
    private LocalDateTime timeStamp;
    
    private String method;

    private String recipient;
    
//    @ManyToOne
//    @JoinColumn(name = "flight_id" , referencedColumnName = "Id")
//    private Flights flight;
    
    public Notification() {
    	
    }
    
    
    public Notification(String notificationId, String message, LocalDateTime timeStamp, String method, String recipient,
			Flights flight) {
		super();
		this.notificationId = notificationId;
		this.message = message;
		this.timeStamp = timeStamp;
		this.method = method;
		this.recipient = recipient;
//		this.flight = flight;
	}

//	public Flights getFlight() {
//		return flight;
//	}
//
//	public void setFlight(Flights flight) {
//		this.flight = flight;
//	}

	public String getNotificationId() {
		return notificationId;
	}

	public String getMessage() {
		return message;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public String getMethod() {
		return method;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setNotificationId(String notificationId) {
		this.notificationId = notificationId;
	}



	public void setMessage(String message) {
		this.message = message;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	
    
    
    	
    
}
