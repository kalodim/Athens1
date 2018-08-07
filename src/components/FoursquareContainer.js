import React, {Component} from 'react';


var foursquare = require('react-foursquare')({
    clientID: 'JZCAWJMRWCKLLIOKPYZR3VWDAKAFKGT1NTTKLIR2HJYMIXBY',
    clientSecret: 'UAULBVBHNHJUYBUQFMN0EAZKZ5GS3R5DU5WYUR0EFHPTM31K',
    style: 'foursquare', // default: 'foursquare'
    version: '20140806' //  default: '20140806'
});

var params = {
    "ll": "37.7749,-122.4194",
    "query": 'Blue Bottle'
};

export class FoursquareContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        foursquare.venues.getVenues(params)
            .then(res => {
                this.setState({ items: res.response.venues });
            }, error => {
                console.error("something went wrong");
            });
    }

    render() {
        return (
            <div>
                <div>Items:</div>
                { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
            </div>
        )
    }

}