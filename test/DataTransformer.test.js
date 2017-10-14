import DataTransformer from './../src/DataTransformer';

test('transport transform data', () => {
  let data = {
    data: {
      combinations: [{
        identity: "combinationIdA",
        type: 'TRANSPORT',
        transports: {
          'BCN|MAD': [
            {
              id: 'ES_1',
              plating_carrier: 'IB',
              provider: 'GALILEO',
              price_lines: [{
                  price: {
                    amount: "10",
                    currency: 'EUR'
                  },
                  quantity: 1,
                  type: "TICKET_BASE_PRICE_ADULT"
                },
                {
                  price: {
                    amount: "11.34",
                    currency: 'EUR'
                  },
                  quantity: 1,
                  type: 'SERVICE_FEE',
                  payment_method: 'MASTERCARD_CREDIT'
                },
                {
                  price: {
                    amount: "12.34",
                    currency: 'EUR'
                  },
                  quantity: 1,
                  type: 'SERVICE_FEE',
                  payment_method: 'MASTERCARD_DEBIT'
                },
                {
                  price: {
                    amount: "12.34",
                    currency: 'EUR'
                  },
                  quantity: 1,
                  type: 'SERVICE_FEE',
                  payment_method: 'MASTERCARD_DEBIT'
                },
                {
                  price: {
                    amount: "12.35",
                    currency: 'EUR'
                  },
                  quantity: 1,
                  type: 'SERVICE_FEE',
                  payment_method: 'MASTERCARD_DEBIT'
                }]
            }
          ]
        }
      }]
    }
  };

  let expected = {
    combinationIdA: {
      ES_1: {
        id: 'ES_1',
        plating_carrier: 'IB',
        provider: 'GALILEO',
        type: 'TRANSPORT',
        price_lines: {
          TICKET_BASE_PRICE_ADULT: [
            '10 EUR|1|'
          ],
          SERVICE_FEE : [
            '11.34 EUR|1|MASTERCARD_CREDIT',
            '12.34 EUR|2|MASTERCARD_DEBIT',
            '12.35 EUR|1|MASTERCARD_DEBIT'
          ]
        }
      },
      type: 'TRANSPORT',
    }
  };

  expect((new DataTransformer()).transform(data).flightResults)
    .toEqual(expected);
});