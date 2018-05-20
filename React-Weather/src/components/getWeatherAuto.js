import React, {Component} from 'react'

class GetWeatherAuto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_location: '',
            imgUrl: '',
            feelsLike: '',
            looksLike: '',
            precip: '',
            state: '',
            city: ''
        };

        this.getWeather = this
            .getWeather
            .bind(this)
    }

    someFn = (weather) => {
        this
            .props
            .callBackFromParent(weather);
    }

    getWeather = async() => {
        const resp = await fetch("http://api.wunderground.com/api/d98fd4d494c04eae/geolookup/conditions/q/autoip.j" +
                "son")
        const data = await resp.json();
        let weather = {
            imgUrl: data.current_observation.icon_url,
            display_location: data.current_observation.display_location.full,
            feelsLike: data.current_observation.feelslike_string,
            looksLike: "Looks like you should expect " + data
                .current_observation
                .weather
                .toLowerCase() + " today.",
            precip: data.current_observation.precip_today_string,
            state: data.location.state,
            city: data.location.city

        }
        console.log(weather)
        this.someFn(weather);
        this.setState(weather);

        console.log(data)
        //.current_observation.display_location
    }

    componentDidMount() {
        this.getWeather()
    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row pad-cards">
                        <div className="card">
                            <img src={this.state.imgUrl} alt="Avatar" className="card-img"/>
                            <hr/>
                            <div className="container">
                                <h4>
                                    <b>{this.state.display_location}</b>
                                </h4>
                                <p>{this.state.looksLike}</p>
                                <p>
                                    <b>Feels Like</b>: {this.state.feelsLike}
                                </p>
                                <p>
                                    <b>Precip</b>: {this.state.precip}
                                </p>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GetWeatherAuto