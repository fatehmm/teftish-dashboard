'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  { Month: 'Jan 21', Conversion: 3200, Clicks: 2100 },
  { Month: 'Feb 21', Conversion: 1800, Clicks: 1500 },
  { Month: 'Mar 21', Conversion: 2500, Clicks: 1800 },
  { Month: 'Apr 21', Conversion: 3100, Clicks: 2200 },
  { Month: 'May 21', Conversion: 2800, Clicks: 2000 },
  { Month: 'Jun 21', Conversion: 3400, Clicks: 2400 },
  { Month: 'Jul 21', Conversion: 1900, Clicks: 1300 },
  { Month: 'Aug 21', Conversion: 2700, Clicks: 1900 },
  { Month: 'Sep 21', Conversion: 3300, Clicks: 2300 },
  { Month: 'Oct 21', Conversion: 3000, Clicks: 2100 },
  { Month: 'Nov 21', Conversion: 2200, Clicks: 1600 },
  { Month: 'Dec 21', Conversion: 2800, Clicks: 2000 },
  { Month: 'Jan 22', Conversion: 3200, Clicks: 2200 },
  { Month: 'Feb 22', Conversion: 1800, Clicks: 1500 },
  { Month: 'Mar 22', Conversion: 2500, Clicks: 1800 },
  { Month: 'Apr 22', Conversion: 3100, Clicks: 2200 },
  { Month: 'May 22', Conversion: 2800, Clicks: 2000 },
  { Month: 'Jun 22', Conversion: 3400, Clicks: 2400 },
  { Month: 'Jul 22', Conversion: 1900, Clicks: 1300 },
  { Month: 'Aug 22', Conversion: 2700, Clicks: 1900 },
  { Month: 'Sep 22', Conversion: 3300, Clicks: 2300 },
  { Month: 'Oct 22', Conversion: 3000, Clicks: 2100 },
  { Month: 'Nov 22', Conversion: 2200, Clicks: 1600 },
  { Month: 'Dec 22', Conversion: 2800, Clicks: 2000 },
  // ... (repeat as needed)
];

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Performance Chart</Title>
      <Text>Conversion and Click Rate </Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Conversion', 'Clicks']}
        index="Month"
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number: number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
