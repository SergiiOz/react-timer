import React, { useEffect } from 'react';
import * as d3 from 'd3';

const ChartRadial = ({ className, fillColor, sizeCircle = 0 }) => {
  useEffect(() => {
    d3.select(`.${className}`).attr('r', sizeCircle);
  }, [sizeCircle, className]);

  return (
    <div>
      <svg style={{ height: '150px', width: '150px' }}>
        <circle
          className={className}
          style={{ fill: fillColor }}
          stroke="black"
          cx={70}
          cy={70}
          r={50}
        ></circle>
      </svg>
    </div>
  );
};

export default ChartRadial;
