const TRANSPORT_TYPE = 'TRANSPORT';

class DataTransformer {
  transform(data) {
    let flightResults = ((combinations) => {
      return combinations.reduce((prev, combination) => {
        const identity = combination.identity;
        const type = combination.type === TRANSPORT_TYPE ? 'transports' : 'packages';
        prev[identity] = {
          type: combination.type
        };

        if (type === 'packages') {
          combination[type].forEach((_package) => {
            let transports = _package.transports;
            Object.keys(transports).forEach((key) => {
              transports[key].forEach((transport) => {
                prev[transport.id] = {
                  provider: transport.provider,
                  id: transport.id,
                  type: combination.type,
                  plating_carrier: transport.plating_carrier,
                  price_lines: _package.price_lines
                };
              });
            });
          });

          return prev;
        }

        Object.keys(combination[type]).forEach((key) => {
          combination[type][key].forEach((transport) => {
            prev[transport.id] = {
              provider: transport.provider,
              id: transport.id,
              type: combination.type,
              plating_carrier: transport.plating_carrier,
              price_lines: transport.price_lines
            };
          });
        });

        return prev;
      }, {});
    })(data.data.combinations);

    return {...data, flightResults};
  }
}

export default DataTransformer;