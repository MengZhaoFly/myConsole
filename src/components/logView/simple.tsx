import React, { PureComponent } from 'react';
import './style.css';

interface Props {
  data: any;
}

export class Simple extends PureComponent<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let { data } = this.props;
    if (typeof data === 'string' && data.length > 200) {
      data = data.slice(0, 200) + '…';
    }

    return <div className="my-code-simple">{valueToText(data)}</div>;
  }
}

function valueToText(value: any) {
  if (value === undefined) {
    return 'undefined';
  } else if (typeof value === 'number') {
    return value.toString();
  }
  return JSON.stringify(value);
}
