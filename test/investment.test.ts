import { assert, expect, test } from 'vitest'
import { Investment } from '../src/investment.js'

// Edit an assertion and save to see HMR in action

test('Investemnt.getStatusForDay()', () => {

  const investemnt = new Investment(
    250000,
    5000,
    'monthly',
    8.0,
    'monthly',
    // startAge: 32,
    // endAge: 40,
  );

  const numberOfYears = 7;
  const date = new Date();
  const futureDate = new Date(date.getFullYear() + numberOfYears); 

  expect(investemnt.getStatusForDay(futureDate));
})
