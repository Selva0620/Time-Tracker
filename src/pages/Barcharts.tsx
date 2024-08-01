import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { date: 'Mon', hours: 0 },
    { date: 'Tue', hours: 0 },
    { date: 'Wed', hours: 0 },
    { date: 'Thu', hours: 3.5 },
    { date: 'Fri', hours: 0 },
    { date: 'Sat', hours: 0},
  ];
  
  const BarCharts: React.FC = () => {
    return (
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Hours Worked per Day</h2>
          <ResponsiveContainer width="100%" height={300} >
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3"  />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend  />
              <Bar dataKey="hours" fill="#388e3c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
  };
  export default BarCharts