import React , {Component} from 'react';
import NewSingle from './NewSingle.js';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() { // lifecycle method. runs after component has been rendered 
        const url = 'https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=ab5abffbea2b456593208d224c7d5ed7';
        fetch(url)
            .then((response) => { // the difference between fetch and axios is that you need to return the response in fetch to do something with it 
                return response.json();
            })
            .then((ersdata) => {
                this.setState({
                    news: ersdata.articles
                })
            })
            .catch((error) => console.log(error))
    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} /> // key should be unique. because the API doesn't return an ID, we leveraged the URL as the unique key 
        ))
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;