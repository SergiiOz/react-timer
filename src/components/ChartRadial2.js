import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ChartRadial2 = ({
  className = 'circleTwo',
  fillColor = 'red',
  sizeCircle = 100,
}) => {
  const circleRef = useRef();

  useEffect(() => {
    const circleD3 = d3.select(circleRef.current);
    circleD3
      .attr('r', sizeCircle)
      .style('fill', fillColor)
      .attr('stroke', 'yellow')
      .attr('cx', 70)
      .attr('cy', 70);
  }, [sizeCircle, fillColor]);

  return (
    <div>
      <svg style={{ height: '150px', width: '150px' }}>
        <circle ref={circleRef} className={className}></circle>
      </svg>
      <div style={{ textAlign: 'center' }}>seconds {sizeCircle}</div>
    </div>
  );
};

export default ChartRadial2;
