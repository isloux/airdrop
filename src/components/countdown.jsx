import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const CountdownTimer = (props) => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const targetDate = new Date("2023-12-26T12:13:20"); // Replace with your target date and time
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const timeDifference = targetDate - now;
  
        if (timeDifference <= 0) {
          clearInterval(interval);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
          setCountdown({ days, hours, minutes, seconds });
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Box bgColor="#1A1B1D" color="#FFDF2B" p={4} borderRadius={4}>
        <Text fontSize="2xl">
          {props.children}: {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
        </Text>
      </Box>
    );
  }

  export default CountdownTimer;