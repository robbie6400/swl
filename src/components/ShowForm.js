import React, { Component } from 'react';
import axios from 'axios';

class ShowForm extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOptions: [],
      selectedOption: ''
    };
  }

  componentDidMount() {
    // Make an Axios GET request to fetch the array
    axios
      .get('https://skylershowsn-8b98.restdb.io/rest/venueref?apikey=64d3e666a3ea46156b978d02')
      .then((response) => {
        this.setState({ dropdownOptions: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  handleDropdownChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleAddNewOption = () => {
    const newOption = this.state.newOption;
    const newOption1 = this.state.newOption1;
    const newOption2 = this.state.newOption2;
    // Create a JSON object with the new option data
    const newOptionData = {
      "place": newOption,
      "city": newOption1,
      "state": newOption2
      // Add any other fields you need for the new option
    };
  
    axios
      .post('https://skylershowsn-8b98.restdb.io/rest/venueref?apikey=64d3e666a3ea46156b978d02', newOptionData, {
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      })
      .then((response) => {
        console.log('New option added successfully:', response.data);
  
        this.setState((prevState) => ({
          dropdownOptions: [...prevState.dropdownOptions, { _id: response.data._id, place: newOption }],
          selectedOption: newOption,
          newOption: '',
        }));
      })
      .catch((error) => {
        console.error('Error adding new option:', error);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      selectedOption: this.state.selectedOption,
    };

    // Send a POST request to your API endpoint
    axios
      .post('https://skylershowsn-8b98.restdb.io/rest/showscollection?apikey=64d3e666a3ea46156b978d02', formData)
      .then((response) => {
        console.log('Form data sent successfully:', response.data);
        // You can reset the form or perform any other actions after successful submission
        this.setState({ selectedOption: '' });
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Start Time:
            <input
              type="datetime-local"
              value={this.state.startTime}
              onChange={this.handleStartTimeChange}
            />
          </label>

          <br />

          <label>
            Select an Venue:
            <select value={this.state.selectedOption} onChange={this.handleDropdownChange}>
              <option value="">Select an option</option>
              {this.state.dropdownOptions.map((option) => (
                <option key={option._id} value={option.place}>
                  {option.place}
                </option>
              ))}
              <option value="addNewOption">Add New</option>
            </select>
          </label>
          {this.state.selectedOption === 'addNewOption' && (
            <div>
              <label>
                New Venue Name:
                <input
                  type="text"
                  value={this.state.newOption}
                  onChange={this.handleNewOptionChange}
                />
              </label>
              <label>
                New Venue City:
                <input
                  type="text"
                  value={this.state.newOption1}
                  onChange={this.handleNewOptionChange}
                />
              </label>
              <label>
                New Venue State:
                <input
                  type="text"
                  value={this.state.newOption2}
                  onChange={this.handleNewOptionChange}
                />
              </label>
              <button type="button" onClick={this.handleAddNewOption}>Add</button>
            </div>
          )}
          
          <br />

          <label>
            Guest:
            <input
              type="text"
              value={this.state.guest}
              onChange={this.handleGuestChange}
            />
          </label>
          
          <br />

          <label>
            End Time:
            <input
              type="time"
              value={this.state.endTime}
              onChange={this.handleEndTimeChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default ShowForm;
