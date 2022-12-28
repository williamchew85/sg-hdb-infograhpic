import React from 'react';
import HDBData from './HDBData'; // import the Python module that handles the HDB data

class HDBInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] // initialize an empty array to store the HDB data
    };
  }

  componentDidMount() {
    // fetch the HDB data from the Python module when the component mounts
    HDBData.getData((data) => {
      this.setState({ data: data });
    });
  }

  render() {
    return (
      <div>
        {/* display the HDB data in a table */}
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Type</th>
              <th>Size (sq ft)</th>
              <th>Sales Price</th>
              <th>Rental Price</th>
              <th>Demographics</th>
              <th>Infrastructure</th>
              <th>Building Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row) => (
              <tr key={row.id}>
                <td>{row.location}</td>
                <td>{row.type}</td>
                <td>{row.size}</td>
                <td>{row.sales_price}</td>
                <td>{row.rental_price}</td>
                <td>{row.demographics}</td>
                <td>{row.infrastructure}</td>
                <td>{row.building_details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HDBInfo;
