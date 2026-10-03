package AnalogWallClock.service;

import AnalogWallClock.dto.TimeResponse;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class ClockService {

    public TimeResponse getCurrentTime() {

        LocalTime now = LocalTime.now();

        return new TimeResponse(
                now.getHour(),
                now.getMinute(),
                now.getSecond()
        );
    }
}