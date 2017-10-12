import DataTransformer from './../src/DataTransformer';

test('transform data', () => {
  let data = {
    data: {
      combinations: [
        {
          "identity": "7c7965af-b7bb-498e-b846-98ec58cb5334",
          "price": {
            "amount": 159.10333333333,
            "currency": "EUR"
          },
          "transports": {
            "BCN|MAD": [
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 17: 55: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 16: 30: 00",
                "duration": "0125",
                "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                "id": "ES_757bc341-1e2d-43ed-bef2-aadffd9dff22",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "297.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "84",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "67",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 9
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 17: 55: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 16:30: 00",
                    "duration": "0125",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BqQqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "FDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB1631"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ],
            "MAD|BCN": [
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 09: 00: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 07: 45:00",
                "duration": "0115",
                "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                "id": "ES_8f045946-7cb4-4ebc-b679-54f2dc9398dd",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "179.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "38",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "38",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 09: 00: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 07: 45: 00",
                    "duration": "0115",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/BR0bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "ODBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5036"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ]
          },
          "type": "TRANSPORT"
        },
        {
          "identity": "882f9ffc-f85b-4a97-9f5b-e4315c0505c4",
          "price": {
            "amount": 165.10333333333,
            "currency": "EUR"
          },
          "transports": {
            "BCN|MAD": [
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 17: 55: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 16: 30: 00",
                "duration": "0125",
                "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                "id": "ES_757bc341-1e2d-43ed-bef2-aadffd9dff22",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "297.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "84",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "67",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "11.896",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 9
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 17: 55: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 16: 30:00",
                    "duration": "0125",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BqQqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "FDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB1631"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ],
            "MAD|BCN": [
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 08: 20: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 07: 00: 00",
                "duration": "0120",
                "fingerprint": "309f0222d381da6287eff47d68702832",
                "id": "ES_39047ef3-b14b-4cf5-a8f0-79568731da52",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "197.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 08: 20: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 07: 00: 00",
                    "duration": "0120",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/B+0bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "QDBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5214"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 10: 20: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 09:00: 00",
                "duration": "0120",
                "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                "id": "ES_7f4af411-ba3f-4053-a5e2-c770d4449219",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "197.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 10: 20: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 09: 00: 00",
                    "duration": "0120",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/Bb1bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "QDBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5391"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 11: 05: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 09: 45: 00",
                "duration": "0120",
                "fingerprint": "14ef408d189d9bae129c773145a27abf",
                "id": "ES_16fa666e-a365-4f67-92e1-5a0421bc3275",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "197.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 11: 05: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 09: 45:00",
                    "duration": "0120",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/BL1bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "QDBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5013"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ]
          },
          "type": "TRANSPORT"
        },
        {
          "identity": "18c1daa3-a5da-4919-9845-9dc5a57dec62",
          "packages": [
            {
              "identity": "ES_d11ebcc1-6998-4fd0-af83-ec1be0238f0c",
              "plating_carrier": "IB",
              "price": {
                "amount": "495.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "128",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "111",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30:00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_7148a2d9-f67c-4c81-beab-d541cdf03b33",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16: 30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 00: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 45: 00",
                    "duration": "0115",
                    "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                    "id": "ES_61cedc1a-675f-4544-82fa-76b9bbc4dd78",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 00: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 45: 00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5036"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_a7627c91-9520-48d8-9bb0-0a550deb580d",
              "plating_carrier": "IB",
              "price": {
                "amount": "495.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "128",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "111",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30: 00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_882fe0b7-6ca9-4330-9df0-bfb24cd7090e",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16:30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 08: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07:00: 00",
                    "duration": "0120",
                    "fingerprint": "309f0222d381da6287eff47d68702832",
                    "id": "ES_a5c89e6c-b8e1-4214-9c57-dc13a3dc101d",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 08: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5214"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_5b4a952b-d2c5-46e3-8c47-9120c4edcdfc",
              "plating_carrier": "IB",
              "price": {
                "amount": "495.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "128",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "111",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30: 00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_b95a1577-0906-49d0-af09-ff9a534d76d3",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16: 30:00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 10: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 09: 00:00",
                    "duration": "0120",
                    "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                    "id": "ES_9d783f21-9099-4816-a52c-59c407c0af2e",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 10: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 09: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BEybibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5391"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_390775cf-1314-4cfb-b5ec-8f69d223c3f1",
              "plating_carrier": "IB",
              "price": {
                "amount": "495.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "128",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "111",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "17.3359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30: 00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_40bd40e5-9394-46ae-81b8-ee48a5fca589",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16: 30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 11: 05: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 09: 45: 00",
                    "duration": "0120",
                    "fingerprint": "14ef408d189d9bae129c773145a27abf",
                    "id": "ES_9033ca2b-81bd-499c-a51c-bb062bd9d197",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 11: 05: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 09:45: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BUybibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5013"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 165.10333333333,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "14689d2a-ed49-4c38-ba9e-eb5e9d205806",
          "price": {
            "amount": 172.43666666667,
            "currency": "EUR"
          },
          "transports": {
            "BCN|MAD": [
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 16: 50: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 15: 30: 00",
                "duration": "0120",
                "fingerprint": "5c111cbdb0bb9fb86f0156405a9553a3",
                "id": "ES_5d99d505-87a2-4619-b9d8-4589b680c6a9",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "337.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "99",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "77",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 5
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 16: 50: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 15: 30: 00",
                    "duration": "0120",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BMSqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "LDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB1531"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 10: 55: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 09: 30: 00",
                "duration": "0125",
                "fingerprint": "aa2b4b5dabae9fc75e42d70e5bd264d2",
                "id": "ES_f611c369-6d4a-4548-a8f0-8cf665f18660",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "337.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "99",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "77",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 9
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 10: 55: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 09: 30: 00",
                    "duration": "0125",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BnSqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "LDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB931"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 13: 25: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 12: 00: 00",
                "duration": "0125",
                "fingerprint": "6d067f4a5a0a5a9dd066542ca73c4dab",
                "id": "ES_4988d230-94e9-43c8-bd64-6e27dbc1e2eb",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "337.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "99",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "77",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 6
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 13: 25: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 12: 00: 00",
                    "duration": "0125",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BYSqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "LDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB1201"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ],
            "MAD|BCN": [
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 09: 00: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 07:45: 00",
                "duration": "0115",
                "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                "id": "ES_8f045946-7cb4-4ebc-b679-54f2dc9398dd",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "179.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "38",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "38",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "12.5937",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 09: 00: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 07: 45: 00",
                    "duration": "0115",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/BR0bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "ODBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5036"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ]
          },
          "type": "TRANSPORT"
        },
        {
          "identity": "7a50bab6-269b-427c-820d-45d6b34b9efd",
          "packages": [
            {
              "identity": "ES_d470ae1c-6bdc-4948-b8db-b1c77ca3228b",
              "plating_carrier": "IB",
              "price": {
                "amount": "518.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "138",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "114",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.1409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.3662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30: 00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_b554a239-5c83-44d3-97fb-c713f9d6ceef",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16:30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 08:00: 00",
                    "duration": "0120",
                    "fingerprint": "c314afe387e9816819b2cf475884b86e",
                    "id": "ES_fd973640-3996-4a7e-913f-fe037a3085c8",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 08: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BkzbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "SDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB800"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 172.77,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "5eb930c0-070f-4246-98af-0140c6708bdd",
          "price": {
            "amount": 178.43666666667,
            "currency": "EUR"
          },
          "transports": {
            "BCN|MAD": [
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 16: 50: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 15:30: 00",
                "duration": "0120",
                "fingerprint": "5c111cbdb0bb9fb86f0156405a9553a3",
                "id": "ES_5d99d505-87a2-4619-b9d8-4589b680c6a9",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "337.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "99",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "77",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 5
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 16: 50: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 15: 30: 00",
                    "duration": "0120",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BMSqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "LDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB1531"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 10: 55: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 09:30: 00",
                "duration": "0125",
                "fingerprint": "aa2b4b5dabae9fc75e42d70e5bd264d2",
                "id": "ES_f611c369-6d4a-4548-a8f0-8cf665f18660",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "337.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "99",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "77",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 9
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 10: 55: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 09: 30: 00",
                    "duration": "0125",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BnSqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "LDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB931"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "MAD",
                "arrival_datetime": "2017-10-16 13: 25: 00",
                "departure_city": "BCN",
                "departure_datetime": "2017-10-16 12:00: 00",
                "duration": "0125",
                "fingerprint": "6d067f4a5a0a5a9dd066542ca73c4dab",
                "id": "ES_4988d230-94e9-43c8-bd64-6e27dbc1e2eb",
                "number_bags": 0,
                "plating_carrier": "IB",
                "price": {
                  "amount": "337.4000",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "99",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "77",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "20.8",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.496",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 6
                },
                "segments": [
                  {
                    "arrival": "2017-10-16 13: 25: 00",
                    "carrier": "IB",
                    "departure": "2017-10-16 12: 00: 00",
                    "duration": "0125",
                    "location_arrival": "MAD",
                    "location_departure": "BCN",
                    "operating_carrier": "IB",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "MIL7H7BAAA/BYSqadWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "LDAN0A4K"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB1201"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ],
            "MAD|BCN": [
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 08: 20: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 07: 00: 00",
                "duration": "0120",
                "fingerprint": "309f0222d381da6287eff47d68702832",
                "id": "ES_39047ef3-b14b-4cf5-a8f0-79568731da52",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "197.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 08: 20: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 07:00: 00",
                    "duration": "0120",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/B+0bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "QDBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5214"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 10: 20: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 09: 00:00",
                "duration": "0120",
                "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                "id": "ES_7f4af411-ba3f-4053-a5e2-c770d4449219",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "197.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 10: 20: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 09: 00: 00",
                    "duration": "0120",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/Bb1bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "QDBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5391"
                  }
                ],
                "stops": 0,
                "type": "F"
              },
              {
                "arrival_city": "BCN",
                "arrival_datetime": "2017-10-20 11: 05: 00",
                "departure_city": "MAD",
                "departure_datetime": "2017-10-20 09:45: 00",
                "duration": "0120",
                "fingerprint": "14ef408d189d9bae129c773145a27abf",
                "id": "ES_16fa666e-a365-4f67-92e1-5a0421bc3275",
                "number_bags": 1,
                "plating_carrier": "IB",
                "price": {
                  "amount": "197.9100",
                  "currency": "EUR"
                },
                "price_lines": [
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_BASE_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "44",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_BASE_PRICE_CHILD"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 2,
                    "type": "TICKET_TAX_PRICE_ADULT"
                  },
                  {
                    "price": {
                      "amount": "21.97",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "TICKET_TAX_PRICE_CHILD"
                  },
                  {
                    "payment_method": "VISA_ELECTRON",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "VISA_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_DEBIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "PAYPAL",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "TRANSFER",
                    "price": {
                      "amount": "13.8537",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "SERVICE_FEE"
                  },
                  {
                    "payment_method": "MASTERCARD_MAESTRO",
                    "price": {
                      "amount": "-29.25",
                      "currency": "EUR"
                    },
                    "quantity": 1,
                    "type": "DISCOUNT"
                  }
                ],
                "provider": "GALILEO",
                "provider_data": {
                  "AVAILABLE_SEATS": 4
                },
                "segments": [
                  {
                    "arrival": "2017-10-20 11: 05: 00",
                    "carrier": "IB",
                    "departure": "2017-10-20 09: 45: 00",
                    "duration": "0120",
                    "location_arrival": "BCN",
                    "location_departure": "MAD",
                    "operating_carrier": "VY",
                    "segment_data": [
                      {
                        "type_key": "AVAILABILITY_SOURCE",
                        "value": "A"
                      },
                      {
                        "type_key": "PROVIDER_KEY",
                        "value": "lzg+H7BAAA/BL1bOhWAAAA=="
                      },
                      {
                        "type_key": "ORIGIN_TERMINAL",
                        "value": "4"
                      },
                      {
                        "type_key": "DESTINATION_TERMINAL",
                        "value": "1"
                      },
                      {
                        "type_key": "CABIN_CLASS",
                        "value": "Economy"
                      },
                      {
                        "type_key": "ADULT_FARE_BASIS",
                        "value": "QDBVYN"
                      },
                      {
                        "type_key": "CONNECTION",
                        "value": ""
                      }
                    ],
                    "selected_booking_class": "",
                    "transport_code": "IB5013"
                  }
                ],
                "stops": 0,
                "type": "F"
              }
            ]
          },
          "type": "TRANSPORT"
        },
        {
          "identity": "d1d82173-010a-4ecb-9b37-057bb2494c10",
          "packages": [
            {
              "identity": "ES_7f8846bc-2f4e-40a3-9dce-962575c9f9fb",
              "plating_carrier": "IB",
              "price": {
                "amount": "535.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "121",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 16: 50: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 15: 30: 00",
                    "duration": "0120",
                    "fingerprint": "5c111cbdb0bb9fb86f0156405a9553a3",
                    "id": "ES_df6d2208-871a-4e66-9ed0-478122c07097",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 5
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 16: 50: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 15:30: 00",
                        "duration": "0120",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BS0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1531"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 00: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07:45: 00",
                    "duration": "0115",
                    "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                    "id": "ES_b396a4e0-cc8e-41ff-a7e0-58487a9bddf7",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 00: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 45: 00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5036"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_16850276-297a-4f37-9e14-228b890858cf",
              "plating_carrier": "IB",
              "price": {
                "amount": "535.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "121",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 10: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09: 30: 00",
                    "duration": "0125",
                    "fingerprint": "aa2b4b5dabae9fc75e42d70e5bd264d2",
                    "id": "ES_78b46beb-e9ed-4596-8ef8-b78fc5251ecc",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 10: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09: 30:00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/Bh0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 00: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 45:00",
                    "duration": "0115",
                    "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                    "id": "ES_4e3452d7-07d3-4b89-bbc6-7e071712510d",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 00: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 45: 00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5036"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_79c5a004-a575-4758-8826-8fc767f9e72d",
              "plating_carrier": "IB",
              "price": {
                "amount": "535.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "121",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 16: 50: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 15: 30: 00",
                    "duration": "0120",
                    "fingerprint": "5c111cbdb0bb9fb86f0156405a9553a3",
                    "id": "ES_0381ed04-5fe0-45f5-9e1b-cf914ae36f1c",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 5
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 16: 50: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 15: 30: 00",
                        "duration": "0120",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BS0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1531"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 08: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 00: 00",
                    "duration": "0120",
                    "fingerprint": "309f0222d381da6287eff47d68702832",
                    "id": "ES_d0cb2118-5297-4065-9c4b-4463ff82a66a",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 08: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07:00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5214"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_aef70c5c-0838-45a2-b53a-02a00fc0155e",
              "plating_carrier": "IB",
              "price": {
                "amount": "535.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "121",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 10: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09:30: 00",
                    "duration": "0125",
                    "fingerprint": "aa2b4b5dabae9fc75e42d70e5bd264d2",
                    "id": "ES_0daabd46-e238-4634-968b-b40185f0188d",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 10: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09: 30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/Bh0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 08: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 00: 00",
                    "duration": "0120",
                    "fingerprint": "309f0222d381da6287eff47d68702832",
                    "id": "ES_bf3735a9-6f03-4f50-a2dc-915d64277e92",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 08: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 00:00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5214"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_370f9cb9-d418-4588-813a-9ffa3f224dba",
              "plating_carrier": "IB",
              "price": {
                "amount": "535.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "121",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 16: 50: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 15: 30:00",
                    "duration": "0120",
                    "fingerprint": "5c111cbdb0bb9fb86f0156405a9553a3",
                    "id": "ES_b69718bf-8c9f-4b58-a9b5-dd2754ddec96",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 5
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 16: 50: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 15: 30: 00",
                        "duration": "0120",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BS0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1531"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 10: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 09: 00: 00",
                    "duration": "0120",
                    "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                    "id": "ES_a9f8645b-12f0-4775-b87f-8596e7173527",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 10: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 09: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BEybibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5391"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_cda44443-2d0d-4206-9e80-e0f18437c8cd",
              "plating_carrier": "IB",
              "price": {
                "amount": "535.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "121",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "10.7062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "18.7359",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 10: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09: 30: 00",
                    "duration": "0125",
                    "fingerprint": "aa2b4b5dabae9fc75e42d70e5bd264d2",
                    "id": "ES_c97ba90a-61f0-46cd-b944-472e959614f8",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 10: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09:30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/Bh0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 10: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 09:00: 00",
                    "duration": "0120",
                    "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                    "id": "ES_70a5a9fa-1038-41c7-b5de-7297319c198f",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 10: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 09: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BEybibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5391"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 178.43666666667,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "f35eeff3-77ee-4997-9093-cf54b2691696",
          "packages": [
            {
              "identity": "ES_6d8da01c-253e-4c4a-976e-61a85183ee78",
              "plating_carrier": "IB",
              "price": {
                "amount": "557.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 11: 10: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09: 45: 00",
                    "duration": "0125",
                    "fingerprint": "a3dd2ce6eeed0bfae647b983c1e73744",
                    "id": "ES_cb4b2298-75fc-4c91-802d-aaf11b110b9d",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 11: 10: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09: 45: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BYubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5015"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 00: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 45: 00",
                    "duration": "0115",
                    "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                    "id": "ES_c120362b-03dd-4a14-bfab-d66a0f277805",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 00: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07:45: 00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5036"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_dbf6d761-eb9b-4c74-b8e0-345207cd5d00",
              "plating_carrier": "IB",
              "price": {
                "amount": "557.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 15: 25: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 14:00: 00",
                    "duration": "0125",
                    "fingerprint": "b1818682a2e147f5a40269b20b9979d8",
                    "id": "ES_e4c6ff42-f785-4968-a189-8a5a757f5e44",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 15: 25: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 14: 00: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BwubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 00: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 45: 00",
                    "duration": "0115",
                    "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                    "id": "ES_e45b2285-daf1-4470-8760-35269092fd33",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 00: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 45:00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5036"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_970f6b0c-91cc-40e0-b31d-660f8245d5c5",
              "plating_carrier": "IB",
              "price": {
                "amount": "557.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 11: 10: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09: 45:00",
                    "duration": "0125",
                    "fingerprint": "a3dd2ce6eeed0bfae647b983c1e73744",
                    "id": "ES_f739387d-30e6-405c-a6a1-aef48cee54d4",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 11: 10: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09: 45: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BYubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5015"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 08: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 00: 00",
                    "duration": "0120",
                    "fingerprint": "309f0222d381da6287eff47d68702832",
                    "id": "ES_e9fb40d9-c2fc-469b-b560-e8ca882f2f05",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 08: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5214"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_bace6bf2-43f2-4693-a858-2fc389962b67",
              "plating_carrier": "IB",
              "price": {
                "amount": "557.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 15: 25: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 14: 00: 00",
                    "duration": "0125",
                    "fingerprint": "b1818682a2e147f5a40269b20b9979d8",
                    "id": "ES_e8bc073c-4d55-448d-919a-079022740cf2",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 15: 25: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 14:00: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BwubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 08: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07:00: 00",
                    "duration": "0120",
                    "fingerprint": "309f0222d381da6287eff47d68702832",
                    "id": "ES_9ab7059f-e2be-4fab-b7a9-3430273a0183",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 08: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5214"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_30df4bec-1523-4318-9349-1681a8ff621d",
              "plating_carrier": "IB",
              "price": {
                "amount": "557.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 11: 10: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09: 45: 00",
                    "duration": "0125",
                    "fingerprint": "a3dd2ce6eeed0bfae647b983c1e73744",
                    "id": "ES_069f0ac0-c4c7-4efe-bff8-9c203b0d28ca",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 11: 10: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09: 45:00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BYubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5015"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 10: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 09: 00:00",
                    "duration": "0120",
                    "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                    "id": "ES_18ffbb8b-a41c-46f0-aef6-975ad37712ed",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 10: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 09: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BEybibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5391"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_58a6ce4a-24c1-4432-b526-c6884e112831",
              "plating_carrier": "IB",
              "price": {
                "amount": "557.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "143",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5059",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 15: 25: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 14: 00: 00",
                    "duration": "0125",
                    "fingerprint": "b1818682a2e147f5a40269b20b9979d8",
                    "id": "ES_3b8014f6-30b2-4419-b835-7e6844da8c47",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 15: 25: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 14: 00: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BwubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 10: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 09: 00: 00",
                    "duration": "0120",
                    "fingerprint": "86ba6dfd49bffc743b1152d0dbb01dca",
                    "id": "ES_1506b766-0755-4843-8b2a-343caa2022a7",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 10: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 09:00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BEybibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5391"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 185.77,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "594a5650-3c58-435d-adb3-05ffd4d7a2dc",
          "packages": [
            {
              "identity": "ES_25d60700-9cc8-4ee9-8a42-7ecbc72664cb",
              "plating_carrier": "IB",
              "price": {
                "amount": "558.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "153",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "124",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.5409",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30:00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_fed9e598-23f7-47ba-a8e9-0f0f414431b0",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16: 30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 12: 15: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 11: 00: 00",
                    "duration": "0115",
                    "fingerprint": "6eca82e4740111aa1599b2ce5f886c10",
                    "id": "ES_45a13481-a755-496f-9cd7-0d491554778a",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 8
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 12: 15: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 11: 00: 00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/Bd3bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "VDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1100"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 186.10333333333,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "0b9778ff-82b5-4583-8978-cd208d49a6c2",
          "packages": [
            {
              "identity": "ES_fffa63e3-c864-46c4-bc7f-7ea3685bcc89",
              "plating_carrier": "IB",
              "price": {
                "amount": "558.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "153",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "124",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 16: 50: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 15: 30: 00",
                    "duration": "0120",
                    "fingerprint": "5c111cbdb0bb9fb86f0156405a9553a3",
                    "id": "ES_4f5bccaf-79f0-45bb-b493-8e55726d2126",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 5
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 16: 50: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 15: 30:00",
                        "duration": "0120",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BS0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1531"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 08: 00:00",
                    "duration": "0120",
                    "fingerprint": "c314afe387e9816819b2cf475884b86e",
                    "id": "ES_628c57ec-46a8-44c9-a95c-e5fff34f8aa7",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 08: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BkzbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "SDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB800"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_ac60e316-64c4-4729-b706-664ed5c6b006",
              "plating_carrier": "IB",
              "price": {
                "amount": "558.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "153",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "124",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 10: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 09: 30: 00",
                    "duration": "0125",
                    "fingerprint": "aa2b4b5dabae9fc75e42d70e5bd264d2",
                    "id": "ES_4672f891-82e0-4a61-ab1c-be841331bda1",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 10: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 09: 30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/Bh0bibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB931"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 08: 00: 00",
                    "duration": "0120",
                    "fingerprint": "c314afe387e9816819b2cf475884b86e",
                    "id": "ES_dc672de0-2388-439d-af20-443edb11b882",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 08:00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BkzbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "SDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB800"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_8c14edf0-38eb-4678-8c7c-9cc1b338ec93",
              "plating_carrier": "IB",
              "price": {
                "amount": "558.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "153",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "124",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.1662",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 13: 25: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 12:00: 00",
                    "duration": "0125",
                    "fingerprint": "6d067f4a5a0a5a9dd066542ca73c4dab",
                    "id": "ES_32fd11f1-3c95-4f82-9e7f-8d289391ddea",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 6
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 13: 25: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 12: 00: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BxzbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "LDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1201"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 08: 00: 00",
                    "duration": "0120",
                    "fingerprint": "c314afe387e9816819b2cf475884b86e",
                    "id": "ES_7e4c737a-26dd-4951-b115-03c4cc98e034",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 08: 00:00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BkzbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "SDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB800"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 186.10333333333,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "8f632337-148a-451b-a561-2ec9376c5e1b",
          "packages": [
            {
              "identity": "ES_df921710-eb4f-4b14-b3f8-1dd6f3b7d6b1",
              "plating_carrier": "IB",
              "price": {
                "amount": "570.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "153",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "136",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "19.9609",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.4062",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 17: 55: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 16: 30: 00",
                    "duration": "0125",
                    "fingerprint": "4b773bd3076aedbe7776d2b824aa0f01",
                    "id": "ES_6ebbf2a0-32b7-41d4-947c-1fc81bf6f54b",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 17: 55: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 16:30: 00",
                        "duration": "0125",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BBxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "FDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB1631"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 13: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 12:00: 00",
                    "duration": "0120",
                    "fingerprint": "1369782accff4c1e7ec6e6cfd277c4c5",
                    "id": "ES_b8ec5eaa-d839-43bb-904f-3cde0cda8b4e",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 9
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 13: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 12: 00: 00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BPxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "VDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5890"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 190.10333333333,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        },
        {
          "identity": "945996b9-495f-4f97-91c9-721731d8a320",
          "packages": [
            {
              "identity": "ES_5a8ee00f-19e4-4c74-b6f8-f2c1dacbf6c1",
              "plating_carrier": "IB",
              "price": {
                "amount": "572.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "157",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "130",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 09: 50: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 08: 30: 00",
                    "duration": "0120",
                    "fingerprint": "c75be3d32a801d2b320b0e6e8c92edaf",
                    "id": "ES_29883b98-153d-40c0-b6e2-42ef5ce208dd",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 7
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 09: 50: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 08: 30: 00",
                        "duration": "0120",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BYxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "MDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB831"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 09: 00: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 45: 00",
                    "duration": "0115",
                    "fingerprint": "cb1b50d1ac65ce5c13bfe2fc59b5a311",
                    "id": "ES_5ad1caaa-f62e-4aa3-a55c-0369df34d592",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 09: 00: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07:45: 00",
                        "duration": "0115",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbubibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5036"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            },
            {
              "identity": "ES_e0c5bb28-b779-45ca-a405-8239ad3de033",
              "plating_carrier": "IB",
              "price": {
                "amount": "572.3100",
                "currency": "EUR"
              },
              "price_lines": [
                {
                  "price": {
                    "amount": "157",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_BASE_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "130",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_BASE_PRICE_CHILD"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 2,
                  "type": "TICKET_TAX_PRICE_ADULT"
                },
                {
                  "price": {
                    "amount": "42.77",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "TICKET_TAX_PRICE_CHILD"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "11.4462",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                },
                {
                  "payment_method": "VISA_ELECTRON",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_DEBIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "VISA_CREDIT_BUSINESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_DEBIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_CREDIT_BUSINESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "PAYPAL",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "TRANSFER",
                  "price": {
                    "amount": "20.0309",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "SERVICE_FEE"
                },
                {
                  "payment_method": "MASTERCARD_MAESTRO",
                  "price": {
                    "amount": "-29.25",
                    "currency": "EUR"
                  },
                  "quantity": 1,
                  "type": "DISCOUNT"
                }
              ],
              "provider": "GALILEO",
              "route": "BCN > MAD | MAD > BCN",
              "transports": {
                "BCN|MAD": [
                  {
                    "arrival_city": "MAD",
                    "arrival_datetime": "2017-10-16 09: 50: 00",
                    "departure_city": "BCN",
                    "departure_datetime": "2017-10-16 08:30: 00",
                    "duration": "0120",
                    "fingerprint": "c75be3d32a801d2b320b0e6e8c92edaf",
                    "id": "ES_4d10d440-4970-4bb3-86a1-1ed0961c7fec",
                    "number_bags": 0,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 7
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-16 09: 50: 00",
                        "carrier": "IB",
                        "departure": "2017-10-16 08: 30: 00",
                        "duration": "0120",
                        "location_arrival": "MAD",
                        "location_departure": "BCN",
                        "operating_carrier": "IB",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BYxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "MDAN0A4K"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB831"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ],
                "MAD|BCN": [
                  {
                    "arrival_city": "BCN",
                    "arrival_datetime": "2017-10-20 08: 20: 00",
                    "departure_city": "MAD",
                    "departure_datetime": "2017-10-20 07: 00: 00",
                    "duration": "0120",
                    "fingerprint": "309f0222d381da6287eff47d68702832",
                    "id": "ES_82efd458-6211-4463-9ce5-6dc7c667d419",
                    "number_bags": 1,
                    "plating_carrier": "IB",
                    "price": [],
                    "price_lines": [],
                    "provider": "GALILEO",
                    "provider_data": {
                      "AVAILABLE_SEATS": 4
                    },
                    "segments": [
                      {
                        "arrival": "2017-10-20 08: 20: 00",
                        "carrier": "IB",
                        "departure": "2017-10-20 07: 00:00",
                        "duration": "0120",
                        "location_arrival": "BCN",
                        "location_departure": "MAD",
                        "operating_carrier": "VY",
                        "segment_data": [
                          {
                            "type_key": "AVAILABILITY_SOURCE",
                            "value": "A"
                          },
                          {
                            "type_key": "PROVIDER_KEY",
                            "value": "d8X+H7BAAA/BbxbibWAAAA=="
                          },
                          {
                            "type_key": "ORIGIN_TERMINAL",
                            "value": "4"
                          },
                          {
                            "type_key": "DESTINATION_TERMINAL",
                            "value": "1"
                          },
                          {
                            "type_key": "CABIN_CLASS",
                            "value": "Economy"
                          },
                          {
                            "type_key": "ADULT_FARE_BASIS",
                            "value": "QDBVYN"
                          },
                          {
                            "type_key": "CONNECTION",
                            "value": ""
                          }
                        ],
                        "selected_booking_class": "",
                        "transport_code": "IB5214"
                      }
                    ],
                    "stops": 0,
                    "type": "F"
                  }
                ]
              }
            }
          ],
          "price": {
            "amount": 190.77,
            "currency": "EUR"
          },
          "type": "PACKAGE"
        }
      ]
    }
  };

  let expected = {
    ...data,
    flightResults: {
      "0b9778ff-82b5-4583-8978-cd208d49a6c2": {
        "type": "PACKAGE"
      },
      "14689d2a-ed49-4c38-ba9e-eb5e9d205806": {
        "type": "TRANSPORT"
      },
      "18c1daa3-a5da-4919-9845-9dc5a57dec62": {
        "type": "PACKAGE"
      },
      "594a5650-3c58-435d-adb3-05ffd4d7a2dc": {
        "type": "PACKAGE"
      },
      "5eb930c0-070f-4246-98af-0140c6708bdd": {
        "type": "TRANSPORT"
      },
      "7a50bab6-269b-427c-820d-45d6b34b9efd": {
        "type": "PACKAGE"
      },
      "7c7965af-b7bb-498e-b846-98ec58cb5334": {
        "type": "TRANSPORT"
      },
      "882f9ffc-f85b-4a97-9f5b-e4315c0505c4": {
        "type": "TRANSPORT"
      },
      "8f632337-148a-451b-a561-2ec9376c5e1b": {
        "type": "PACKAGE"
      },
      "945996b9-495f-4f97-91c9-721731d8a320": {
        "type": "PACKAGE"
      },
      "ES_0381ed04-5fe0-45f5-9e1b-cf914ae36f1c": {
        "id": "ES_0381ed04-5fe0-45f5-9e1b-cf914ae36f1c",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_069f0ac0-c4c7-4efe-bff8-9c203b0d28ca": {
        "id": "ES_069f0ac0-c4c7-4efe-bff8-9c203b0d28ca",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_0daabd46-e238-4634-968b-b40185f0188d": {
        "id": "ES_0daabd46-e238-4634-968b-b40185f0188d",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_1506b766-0755-4843-8b2a-343caa2022a7": {
        "id": "ES_1506b766-0755-4843-8b2a-343caa2022a7",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_16fa666e-a365-4f67-92e1-5a0421bc3275": {
        "id": "ES_16fa666e-a365-4f67-92e1-5a0421bc3275",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "44",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "44",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_18ffbb8b-a41c-46f0-aef6-975ad37712ed": {
        "id": "ES_18ffbb8b-a41c-46f0-aef6-975ad37712ed",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_29883b98-153d-40c0-b6e2-42ef5ce208dd": {
        "id": "ES_29883b98-153d-40c0-b6e2-42ef5ce208dd",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "157",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "130",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_32fd11f1-3c95-4f82-9e7f-8d289391ddea": {
        "id": "ES_32fd11f1-3c95-4f82-9e7f-8d289391ddea",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_39047ef3-b14b-4cf5-a8f0-79568731da52": {
        "id": "ES_39047ef3-b14b-4cf5-a8f0-79568731da52",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "44",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "44",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_3b8014f6-30b2-4419-b835-7e6844da8c47": {
        "id": "ES_3b8014f6-30b2-4419-b835-7e6844da8c47",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_40bd40e5-9394-46ae-81b8-ee48a5fca589": {
        "id": "ES_40bd40e5-9394-46ae-81b8-ee48a5fca589",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_45a13481-a755-496f-9cd7-0d491554778a": {
        "id": "ES_45a13481-a755-496f-9cd7-0d491554778a",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_4672f891-82e0-4a61-ab1c-be841331bda1": {
        "id": "ES_4672f891-82e0-4a61-ab1c-be841331bda1",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_4988d230-94e9-43c8-bd64-6e27dbc1e2eb": {
        "id": "ES_4988d230-94e9-43c8-bd64-6e27dbc1e2eb",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "99",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_4d10d440-4970-4bb3-86a1-1ed0961c7fec": {
        "id": "ES_4d10d440-4970-4bb3-86a1-1ed0961c7fec",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "157",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "130",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_4e3452d7-07d3-4b89-bbc6-7e071712510d": {
        "id": "ES_4e3452d7-07d3-4b89-bbc6-7e071712510d",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_4f5bccaf-79f0-45bb-b493-8e55726d2126": {
        "id": "ES_4f5bccaf-79f0-45bb-b493-8e55726d2126",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_5ad1caaa-f62e-4aa3-a55c-0369df34d592": {
        "id": "ES_5ad1caaa-f62e-4aa3-a55c-0369df34d592",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "157",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "130",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_5d99d505-87a2-4619-b9d8-4589b680c6a9": {
        "id": "ES_5d99d505-87a2-4619-b9d8-4589b680c6a9",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "99",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_61cedc1a-675f-4544-82fa-76b9bbc4dd78": {
        "id": "ES_61cedc1a-675f-4544-82fa-76b9bbc4dd78",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_628c57ec-46a8-44c9-a95c-e5fff34f8aa7": {
        "id": "ES_628c57ec-46a8-44c9-a95c-e5fff34f8aa7",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_6ebbf2a0-32b7-41d4-947c-1fc81bf6f54b": {
        "id": "ES_6ebbf2a0-32b7-41d4-947c-1fc81bf6f54b",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "136",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_70a5a9fa-1038-41c7-b5de-7297319c198f": {
        "id": "ES_70a5a9fa-1038-41c7-b5de-7297319c198f",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_7148a2d9-f67c-4c81-beab-d541cdf03b33": {
        "id": "ES_7148a2d9-f67c-4c81-beab-d541cdf03b33",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_757bc341-1e2d-43ed-bef2-aadffd9dff22": {
        "id": "ES_757bc341-1e2d-43ed-bef2-aadffd9dff22",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "84",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "67",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.896",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_78b46beb-e9ed-4596-8ef8-b78fc5251ecc": {
        "id": "ES_78b46beb-e9ed-4596-8ef8-b78fc5251ecc",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_7e4c737a-26dd-4951-b115-03c4cc98e034": {
        "id": "ES_7e4c737a-26dd-4951-b115-03c4cc98e034",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_7f4af411-ba3f-4053-a5e2-c770d4449219": {
        "id": "ES_7f4af411-ba3f-4053-a5e2-c770d4449219",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "44",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "44",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "13.8537",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_82efd458-6211-4463-9ce5-6dc7c667d419": {
        "id": "ES_82efd458-6211-4463-9ce5-6dc7c667d419",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "157",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "130",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.4462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "20.0309",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_882fe0b7-6ca9-4330-9df0-bfb24cd7090e": {
        "id": "ES_882fe0b7-6ca9-4330-9df0-bfb24cd7090e",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_8f045946-7cb4-4ebc-b679-54f2dc9398dd": {
        "id": "ES_8f045946-7cb4-4ebc-b679-54f2dc9398dd",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "38",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "38",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "21.97",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "12.5937",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_9033ca2b-81bd-499c-a51c-bb062bd9d197": {
        "id": "ES_9033ca2b-81bd-499c-a51c-bb062bd9d197",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_9ab7059f-e2be-4fab-b7a9-3430273a0183": {
        "id": "ES_9ab7059f-e2be-4fab-b7a9-3430273a0183",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_9d783f21-9099-4816-a52c-59c407c0af2e": {
        "id": "ES_9d783f21-9099-4816-a52c-59c407c0af2e",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_a5c89e6c-b8e1-4214-9c57-dc13a3dc101d": {
        "id": "ES_a5c89e6c-b8e1-4214-9c57-dc13a3dc101d",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_a9f8645b-12f0-4775-b87f-8596e7173527": {
        "id": "ES_a9f8645b-12f0-4775-b87f-8596e7173527",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_b396a4e0-cc8e-41ff-a7e0-58487a9bddf7": {
        "id": "ES_b396a4e0-cc8e-41ff-a7e0-58487a9bddf7",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_b554a239-5c83-44d3-97fb-c713f9d6ceef": {
        "id": "ES_b554a239-5c83-44d3-97fb-c713f9d6ceef",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "138",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "114",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_b69718bf-8c9f-4b58-a9b5-dd2754ddec96": {
        "id": "ES_b69718bf-8c9f-4b58-a9b5-dd2754ddec96",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_b8ec5eaa-d839-43bb-904f-3cde0cda8b4e": {
        "id": "ES_b8ec5eaa-d839-43bb-904f-3cde0cda8b4e",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "136",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.9609",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.4062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_b95a1577-0906-49d0-af09-ff9a534d76d3": {
        "id": "ES_b95a1577-0906-49d0-af09-ff9a534d76d3",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "128",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "111",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "17.3359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_bf3735a9-6f03-4f50-a2dc-915d64277e92": {
        "id": "ES_bf3735a9-6f03-4f50-a2dc-915d64277e92",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_c120362b-03dd-4a14-bfab-d66a0f277805": {
        "id": "ES_c120362b-03dd-4a14-bfab-d66a0f277805",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_c97ba90a-61f0-46cd-b944-472e959614f8": {
        "id": "ES_c97ba90a-61f0-46cd-b944-472e959614f8",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_cb4b2298-75fc-4c91-802d-aaf11b110b9d": {
        "id": "ES_cb4b2298-75fc-4c91-802d-aaf11b110b9d",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_d0cb2118-5297-4065-9c4b-4463ff82a66a": {
        "id": "ES_d0cb2118-5297-4065-9c4b-4463ff82a66a",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_dc672de0-2388-439d-af20-443edb11b882": {
        "id": "ES_dc672de0-2388-439d-af20-443edb11b882",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_df6d2208-871a-4e66-9ed0-478122c07097": {
        "id": "ES_df6d2208-871a-4e66-9ed0-478122c07097",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "121",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.7062",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.7359",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_e45b2285-daf1-4470-8760-35269092fd33": {
        "id": "ES_e45b2285-daf1-4470-8760-35269092fd33",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_e4c6ff42-f785-4968-a189-8a5a757f5e44": {
        "id": "ES_e4c6ff42-f785-4968-a189-8a5a757f5e44",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_e8bc073c-4d55-448d-919a-079022740cf2": {
        "id": "ES_e8bc073c-4d55-448d-919a-079022740cf2",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_e9fb40d9-c2fc-469b-b560-e8ca882f2f05": {
        "id": "ES_e9fb40d9-c2fc-469b-b560-e8ca882f2f05",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_f611c369-6d4a-4548-a8f0-8cf665f18660": {
        "id": "ES_f611c369-6d4a-4548-a8f0-8cf665f18660",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "99",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "20.8",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "13.496",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "TRANSPORT"
      },
      "ES_f739387d-30e6-405c-a6a1-aef48cee54d4": {
        "id": "ES_f739387d-30e6-405c-a6a1-aef48cee54d4",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "143",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1462",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5059",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_fd973640-3996-4a7e-913f-fe037a3085c8": {
        "id": "ES_fd973640-3996-4a7e-913f-fe037a3085c8",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "138",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "114",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "18.1409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "10.3662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "ES_fed9e598-23f7-47ba-a8e9-0f0f414431b0": {
        "id": "ES_fed9e598-23f7-47ba-a8e9-0f0f414431b0",
        "plating_carrier": "IB",
        "price_lines": [
          {
            "price": {
              "amount": "153",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_BASE_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "124",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_BASE_PRICE_CHILD"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 2,
            "type": "TICKET_TAX_PRICE_ADULT"
          },
          {
            "price": {
              "amount": "42.77",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "TICKET_TAX_PRICE_CHILD"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "19.5409",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          },
          {
            "payment_method": "VISA_ELECTRON",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "VISA_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_DEBIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_PARTICULAR",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "AMERICAN_EXPRESS_CREDIT_BUSINESS",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "PAYPAL",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "TRANSFER",
            "price": {
              "amount": "11.1662",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "SERVICE_FEE"
          },
          {
            "payment_method": "MASTERCARD_MAESTRO",
            "price": {
              "amount": "-29.25",
              "currency": "EUR"
            },
            "quantity": 1,
            "type": "DISCOUNT"
          }
        ],
        "provider": "GALILEO",
        "type": "PACKAGE"
      },
      "d1d82173-010a-4ecb-9b37-057bb2494c10": {
        "type": "PACKAGE"
      },
      "f35eeff3-77ee-4997-9093-cf54b2691696": {
        "type": "PACKAGE"
      }
    }
  };

  expect((new DataTransformer()).transform(data))
    .toEqual(expected);
});