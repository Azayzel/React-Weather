import React, {Component} from 'react'

class GetForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Weather: null,
            forecast: []
        };

        this.getWeatherForecast = this
            .getWeatherForecast
            .bind(this)
    }

    getWeatherForecast = async() => {
        const resp = await fetch("http://api.wunderground.com/api/d98fd4d494c04eae/forecast/q/" + this.props.Weather.state + "/" + this.props.Weather.city + ".json")
        const data = await resp.json();
        //this.someFn(weather); this.setState(weather);
        this.setState({forecast: data.forecast.txt_forecast.forecastday})
        console.log("State forecast", this.state.forecast)
    }

    componentDidMount() {
        this.getWeatherForecast()
    }

    render() {

        return (
            <div className="row pad-cards">
                {this
                    .state
                    .forecast
                    .map((day, i) => {
                        return (
                            <div className="mini-card" key={i}>
                                <div className="carousel-item active">
                                    <img className="card-img d-block w-100" src={day.icon_url} alt={day.icon}/>
                                    <p className="title">{day
                                            .icon
                                            .replace("nt_", "")}</p>
                                    <hr/>
                                    <p>{day.fcttext}</p>
                                </div>
                            </div>
                        );
                    })
}
            </div>
        )
    }
}
export default GetForecast;