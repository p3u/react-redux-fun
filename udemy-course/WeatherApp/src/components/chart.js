import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round( _.sum(data) / data.length );
}

export default function Chart(props) {
  let opt = props.opt || {};
  console.log(props.dataList)
  opt = {
    color:  opt.color || 'blue',
    limit:  opt.limit || 40,
    width:  opt.width || 180,
    height: opt.height || 120,
    margin: opt.margin || 5,
    refLine: opt.refLine || 'avg',
    dispNum: opt.disNum || average
  }

  // This should go to Weather list so this graph is more reusable
  let mapData = props.dataList.map((day) => {
    return day.main[props.attr];
  });

  // opt.DisNum is an option to show a reduced number from the data
  // by default we display the avarege below the chart
  let numberDisplay = '';
  if (opt.dispNum) {
    let number = opt.dispNum(mapData);
    numberDisplay = <div>{number}</div>;
  }

  return (
    <Sparklines data={mapData} limit={opt.limit}
                width={opt.width} height={opt.height}
                margin={opt.margin}>
      <SparklinesLine color={opt.color} />
      {opt.refLine ? <SparklinesReferenceLine type={opt.refLine} /> : ''}
      {numberDisplay}
    </Sparklines>
  );
}
