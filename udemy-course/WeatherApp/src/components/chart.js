import React from 'react';
import { Sparklines, SparklinesLine  } from 'react-sparklines';

export default function Chart(props) {
  let opt = props.opt || {};

  opt = {
    color:  opt.color || 'blue',
    limit:  opt.limit || 40,
    width:  opt.width || 180,
    height: opt.height || 120,
    margin: opt.margin || 5
  }

  // This should go to Weather list so this graph is more reusable
  let mapData = props.dataList.map((day) => {
    return day.main[props.attr];
  });

  return (
    <Sparklines data={mapData} limit={opt.limit}
                width={opt.width} height={opt.height}
                margin={opt.margin}>
      <SparklinesLine color={opt.color} />
    </Sparklines>
  );
}
