import React from 'react';

class Image extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            className: "show",
        }
    }

    // handleClick = () => {
    //     this.setState({
    //         className: this.state.className === "show" ? "hide" : "show"
    //         })
    //         console.log(this.state);
    // }


    render(){
        return(
            <>
                <img src={this.props.src} alt = {this.props.alt} className ={this.state.className} />


            </>
        )

    }

}

export default Image;