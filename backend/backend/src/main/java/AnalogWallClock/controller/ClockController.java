package AnalogWallClock.controller;

import AnalogWallClock.dto.TimeResponse;
import AnalogWallClock.service.ClockService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ClockController {

    private final ClockService clockService;

    public ClockController(ClockService clockService) {
        this.clockService = clockService;
    }

    @GetMapping("/api/time")
    public TimeResponse getCurrentTime() {
        return clockService.getCurrentTime();
    }
}