import React from 'react';
import DisplayShowByMonth from './DisplayShowByMonth';

export default function CallShowsByMonths({ startMonth, endMonth }) {
  const months = Array.from({ length: endMonth - startMonth + 1 }, (_, index) => startMonth + index);

  return (
    <div>
      {months.map((month) => (
        <DisplayShowByMonth monthParam={month} />
      ))}
    </div>
  );
}
