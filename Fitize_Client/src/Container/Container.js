import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Container.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StackGrid from "react-stack-grid";
import Fitize from '../Fitize/Fitize'
import InstagramEmbed from 'react-instagram-embed';

var lastScrollTop = 0;

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fitizes: [
                
            ],
            showFitize: false,
            showContainer: false

        }
    }

    componentDidMount() {
        this.setState({fitizes: [
            {img: true, url:'https://instagr.am/p/Zw9o4/media/?size=l'},
           
            {img: true,url:'https://www.instagram.com/p/CBWYzjZjJin/media/?size=l'},
            {img: true,url:'https://www.instagram.com/p/CDo-oVvMhyh/media/?size=l'},
            {img: true,url:'https://www.instagram.com/p/CDraMXMJ4xY/media/?size=l'},
/*             {height: 120,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 150,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 110,url:'https://instagr.am/p/Zw9o4/'},
            {height: 190,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 170,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 50,url:'https://instagr.am/p/Zw9o4/'},
            {height: 20,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 10,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 40,url:'https://instagr.am/p/Zw9o4/'},
            {height: 600,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 800,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 670,url:'https://instagr.am/p/Zw9o4/'},
            {height: 340,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 780,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 900,url:'https://instagr.am/p/Zw9o4/'},
            {height: 970,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 670,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 450,url:'https://instagr.am/p/Zw9o4/'},
            {height: 30,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 10,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 30,url:'https://instagr.am/p/Zw9o4/'},
            {height: 1000,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 30,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 120,url:'https://instagr.am/p/Zw9o4/'},
            {height: 110,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
            {height: 1230,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
            {height: 340,url:'https://www.instagram.com/p/CDpCAz8n9So/'}, */
            {img: true,url:'https://www.profit24.pl/images/photos/okladki/851/850317/__b_9788363960131.jpg'},
            {img: true,url:'https://ecsmedia.pl/c/kolejne-365-dni-w-iext54486427.jpg'},
            {img: true,url:'https://www.profit24.pl/images/photos/okladki/1417/1416899/__b_9788310135810.jpg'},
            {img: true,url:'https://www.gandalf.com.pl/o/ukryte-terapie-czego-ci-lekarz-nie,pd,502730.jpg'}
        ],
        count: 0
    });
    window.addEventListener('scroll', this.handleScroll, true); 
    }

    componentWillUpdate() {
        
    }


    showFitize = () => {
        this.setState({showFitize: true});
    }

    handleScroll = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            this.setState({showFitize: true});
            var newFit = [  {height: 120,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 150,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 110,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 190,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 170,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            /* {height: 50,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 20,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 10,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 40,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 600,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 800,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 670,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 340,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 780,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 900,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 970,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 670,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 450,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 30,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 10,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 30,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 1000,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 30,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 120,url:'https://instagr.am/p/Zw9o4/'},
                            {height: 110,url:'https://www.instagram.com/p/CDo-oVvMhyh/'},
                            {height: 1230,url:'https://www.instagram.com/p/CBWYzjZjJin/'},
                            {height: 340,url:'https://www.instagram.com/p/CDpCAz8n9So/'}, */];
 
     /*     this.setState(prevState => ({
            fitizes: [...prevState.fitizes, ...newFit]
          }))  */
        } 
        lastScrollTop = st <= 0 ? 0 : st;


     }


    showAll = () => {
        this.setState({count: this.state.count + 1});
        this.setState({showFitize: !this.state.showFitize});
           if(this.state.count == this.state.fitizes.length-1) {
            this.setState({showContainer: true});
        }   
    }

    showAll1 = () => {
        alert("fefe");
        this.setState({showContainer: true});
    }

    render() {
        let fitizes =  this.state.fitizes.map(fitize => {
            let image = fitize.img?
            
            <div style={{maxWidth: "300px"}}> 
               <img 
                   className="imgField"
                   src={fitize.url}
                   onLoad={() => {this.showAll()}}
                  />
             </div>
            : 
            <InstagramEmbed
            url={fitize.url}
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {this.showAll()}}
            onFailure={() => {}}
          /> 

            return (<div>Podobieństwo sylwetki: 78%{image}</div>);});
      


        return (
            <div className= {this.state.showContainer?  "mainContainer" : "mainContainerDisable"}>
            <StackGrid
            columnWidth={300}
            gutterWidth={20}
            duration={0}
            appearDelay={0}>
            {fitizes}
            </StackGrid>
            </div>
       
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.jwttoken !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
