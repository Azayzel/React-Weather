import React, {Component} from 'react';

class GetCityState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: ''
        };

        this.handleChangeCity = this
            .handleChangeCity
            .bind(this);
        this.handleSelectState = this
            .handleSelectState
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChangeCity(event) {
        console.log("City: " + event.target.value)
        this.setState({city: event.target.value});
    }

    handleSelectState(event) {
        console.log("State: " + event.target.value)
        this.setState({state: event.target.value});
    }

    handleSubmit(event) {
        console.log("Submitting form " + this.state.state + " " + this.state.city)
        event.preventDefault();
    }
    render() {
        let states = [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        ]

        return (
            <div>
                <p className="p-text">If you're using a proxy, enter your City and State below
                    to find your local weather
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="sun-color">City
                            <input
                                name="City"
                                className="form-control wide"
                                placeholder="Your City..."
                                onChange={this.handleChangeCity}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="sun-color">State
                            <select
                                name="State"
                                className="form-control wide"
                                onChange={this.handleSelectState}>
                                <option value=""></option>
                                {states
                                    .map(function (state) {
                                        return <option key={state} value={state}>{state}</option>;
                                    })
}
                            </select>
                        </label>
                    </div>
                    <button className="btn btn-success sun-color" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default GetCityState