import AnalogWallClock.dto.TimeResponse; 
import org.springframework.stereotype.Service; 
import java.time.LocalTime; 
import java.time.ZoneId; 

@Service 
public class ClockService 
{ 
        public TimeResponse getCurrentTime() 
    { 
            LocalTime now = LocalTime.now(ZoneId.of("Asia/Kolkata")); 
                                              return new TimeResponse(
                                                  now.getHour(), 
                                                  now.getMinute(), 
                                                  now.getSecond()
                                              ); 
    } 
}
