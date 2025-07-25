import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ title = "Offer Ends In", resetWeekly = true }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDate;
      
      if (resetWeekly) {
        // Reset every Sunday at midnight
        const daysUntilSunday = (7 - now.getDay()) % 7;
        targetDate = new Date(now);
        targetDate.setDate(now.getDate() + (daysUntilSunday || 7));
        targetDate.setHours(23, 59, 59, 999);
      } else {
        // 72-hour countdown
        targetDate = new Date(now.getTime() + (72 * 60 * 60 * 1000));
      }

      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [resetWeekly]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="text-center">
      <p className="text-electric-blue font-semibold mb-4 text-lg">{title}</p>
      <div className="flex justify-center space-x-4">
        {timeUnits.map(({ label, value }, index) => (
          <motion.div
            key={label}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: index * 0.1 }}
            className="countdown-digit p-4 min-w-[80px]"
          >
            <div className="text-3xl font-cyber font-bold text-white">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-300 mt-1">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;