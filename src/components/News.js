import React, { Component } from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            category: "general",
            totalresults: 0,
        };
    }

    fetchNews = async () => {
        this.props.setProgress(0);  // ✅ Using props correctly
        this.setState({ loading: true });

        let url = `https://newsapi.org/v2/top-headlines?category=${this.state.category}&apiKey=b6167e68d7384564a29a1e61a4afac15&pagesize=9&page=${this.state.page}`;
        
        this.props.setProgress(25);
        let fetched = await fetch(url);
        
        this.props.setProgress(50);
        let data = await fetched.json();
        
        this.props.setProgress(75);
        this.setState({
            articles: data.articles || [],
            loading: false,
            totalresults: data.totalResults,
        });

        this.props.setProgress(100);
    };

    async componentDidMount() {
        this.fetchNews();
    }

    toggle = (event) => {
        this.setState({ category: event.target.value, page: 1 }, this.fetchNews);
    };

    prev = () => {
        this.setState({ page: this.state.page - 1 }, this.fetchNews);
    };

    nxt = () => {
        this.setState({ page: this.state.page + 1 }, this.fetchNews);
    };

    Home = () => {
        this.setState({ page: 1 }, this.fetchNews);  // ✅ Now fetches news
    };

    render() {
        return (
            <div className="body">
                <h2 className="heading"><marquee>Top {this.state.category} Heading---Dakpiyon</marquee></h2>

                <div className="buttons">
                    <h3>News Categories----</h3><br />
                    <button className="btn" onClick={this.Home}>Home</button>
                    <button className="btn" value="entertainment" onClick={this.toggle}>Entertainment</button>
                    <button className="btn" value="business" onClick={this.toggle}>Business</button>
                    <button className="btn" value="health" onClick={this.toggle}>Health</button>
                    <button className="btn" value="science" onClick={this.toggle}>Science</button>
                    <button className="btn" value="sports" onClick={this.toggle}>Sports</button>
                    <button className="btn" value="technology" onClick={this.toggle}>Technology</button>
            
                    <span className="pagecount">Page Count == ({this.state.page}  / {Math.ceil(this.state.totalresults/9)})</span>
                </div>

                {this.state.loading && <h2>Loading...</h2>}<br/>

                <div className="row" id="body">
                    {this.state.articles.map((element) => (
                        <div className="col-md-4" key={element.url}>
                            <Newsitem
                                title={element.title ? element.title.slice(0, 50) : "No Title Available"}
                                url={element.url}
                                img={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"}
                                description={element.description ? element.description.slice(0, 80) : "No description available"}
                            />
                        </div>
                    ))}
                </div>

                <div className="togglepages">
                    <button disabled={this.state.page <= 1} className="page" onClick={this.prev}>---Previous</button>
                    <button 
                        disabled={this.state.page >= Math.ceil(this.state.totalresults / 9)} 
                        className="page" 
                        onClick={this.nxt}
                    >
                        Next---
                    </button>
                </div>
            </div>
        );
    }
}
