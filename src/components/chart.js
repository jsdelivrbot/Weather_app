import React from 'react';
import { Sparklines , SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
      sum += data[i];
    }

    return Math.round(sum/data.length);
}

export default ({data, color, units}) => {
  return (
    <div>
      <Sparklines height = {120} width = {180} data={data} >
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)}{units}</div>
    </div>
  )
}
