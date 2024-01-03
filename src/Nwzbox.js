import React, { Component } from 'react'
import NwzItm from './NwzItm'
import { FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
export default class Nwzbox extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Marshall Cohen",
            "title": "Detroit News: Trump recorded pressuring Michigan canvassers not to certify 2020 vote - CNN",
            "description": "The Detroit News obtained a recording of a call Trump made to two Michigan county officials in 2020, urging them not to certify the election results from Detroit.",
            "url": "https://www.cnn.com/2023/12/22/politics/trump-recorded-pressuring-michigan-canvassers/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231219211737-trump-iowa-121923.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-12-22T11:55:00Z",
            "content": "The Detroit News obtained a recording of a call former President Donald Trump made to two Michigan county officials in 2020, urging them not to certify the election results from Detroit.\r\nThe call wa… [+2016 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            fharticles: [],
            loading: false,
            pg:1,
            rslt:0,
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevprops) {
        if (this.props.jsnurl !== prevprops.jsnurl) {
            // console.log('this.state.jsnurl-',this.props.jsnurl)
            // console.log('prevprops.jsnurl-',prevprops.jsnurl)
            // console.log('URL updated');
            this.setState({
                pg:1,   
            })
            this.fetchData();
        }
    }
    fetchData = () => {
        console.log('News URL-',this.props.jsnurl+'&page='+String(this.state.pg)+'&pageSize=20');
        this.props.ProgrsFunc(20);
        this.setState({ loading: true })
        fetch(this.props.jsnurl+'&page='+this.state.pg+'&pageSize=20')
            .then((response) => response.json())
            .then((data) => {
                this.props.ProgrsFunc(50);
                this.setState({
                    fharticles: data['articles'],
                    rslt:data['totalResults'],
                    loading: false,
                });
                this.props.ProgrsFunc(100);
            // console.log('rslt-',this.state.fharticles.length);
                // console.log('resjson-',this.response.json());
                // console.log('fhar-',this.state.fharticles);
            })
            .catch((error) => { console.log('error-', error); this.setState({ loading: false }) 
        });

        };

 HandlePrev=()=>{
    // console.log('Prev');
    this.setState({
        pg:(this.state.pg)-1,   
    })
    this.fetchData();
}
HandleNext=()=>{
    // console.log('\n\nNext');
    this.setState({ pg: this.state.pg + 1 }, () => {
        if (this.state.pg > 1) {
            this.fetchData();
        }
    });
}

    render() {
        // console.log('rslt-',this.state.rslt);
        if (this.state.loading === true) {
            return (<div className="lding"></div>)
        }
        else  if(this.state.rslt===0){          
            // console.log('no!!')
            return(<div className="Norslts" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgb-CQ1Qeh0nFuDYBlanN7A_4dj-RgZuQkPg&usqp=CAU"  width="130px" alt="" />
                No news found for : {this.props.ttl.slice(17)}
                </div> )
        }
        return (
            <>
            
                <div className="nzcnt" style={{width:"100%"}}>

                    <div className="hdin">{this.props.ttl}</div>
                    <div className="nwzbox">
                        {

                            this.state.fharticles.map((key) => {

                                return (
                                    <NwzItm key={key.url} imgurl={key.urlToImage} nttl={key.title} url={key.url}  date={(key.publishedAt)}/>
                                )
                            })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button  disabled={this.state.pg<=1} type="button" className="btn btn-danger" onClick={this.HandlePrev}>{<FaArrowCircleLeft />}Previous</button>
                            Page-{this.state.pg}/{Math.ceil(this.state.rslt/20)}
                        <button  disabled={this.state.pg===Math.ceil(this.state.rslt/20)} type="button" className="btn btn-danger" onClick={this.HandleNext}>Next {<FaArrowCircleRight />}</button>
                    </div>
                </div>
            </>
        )
    }
}

