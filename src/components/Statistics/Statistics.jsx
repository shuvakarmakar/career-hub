import React from 'react';
import {
    ComposedChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
} from 'recharts';

const data = [
    {
        name: 'Assignment 1',
        Mark: 50,
    },
    {
        name: 'Assignment 2',
        Mark: 60,
    },
    {
        name: 'Assignment 3',
        Mark: 59,
    },
    {
        name: 'Assignment 4',
        Mark: 60,
    },
    {
        name: 'Assignment 5',
        Mark: 59,
    },
    {
        name: 'Assignment 6',
        Mark: 60,
    },
    {
        name: 'Assignment 7',
        Mark: 60,
    },
    {
        name: 'Assignment 8',
        Mark: 58,
    },
];


export default function Statistics(){
        return(
        <div>
            <ComposedChart
                width={1000}
                height={500}
                data={data}
                margin={{
                    top: 40,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Mark" fill="#8884d8" stroke="#8884d8" />
                <Scatter dataKey="Mark" fill="red" />
            </ComposedChart>
        </div >
    );
    
};

// export default Statistics;