import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round( _.sum(data) / data.length );
}

export default function Chart(props) {
  let opt = props.opt || {};
  opt = {
    color:  opt.color || 'blue',
    limit:  opt.limit || 40,
    width:  opt.width || 180,
    height: opt.height || 120,
    margin: opt.margin || 5,
    refLine: opt.refLine || 'avg',
    dispNum: opt.disNum || average,
  }

  // opt.DisNum is an option to show a reduced number from the data
  // by default we display the avarege below the chart
  let numberDisplay = '';
  if (opt.dispNum) {
    let number = opt.dispNum(props.dataList);
    numberDisplay = <div>{number} {props.unity}</div>;
  }

  return (
    <Sparklines data={props.dataList} limit={opt.limit}
                width={opt.width} height={opt.height}
                margin={opt.margin}>
      <SparklinesLine color={opt.color} />
      {opt.refLine ? <SparklinesReferenceLine type={opt.refLine} /> : ''}
      {numberDisplay}
    </Sparklines>
  );
}
