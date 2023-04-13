import soundfile from './wow.mp3';
import React from "react";
import  ReactDOM  from "react-dom/client";

class Effect extends React.Component {
constructor(props) {
 super(props);
 this.state = {
play: false
 };
}

render() {
            return (
        <div>
        <h1>'You Won'</h1>
                <audio src={'wow.mp3'} autoPlay />
                </div>
            )
}
};
 
export default Effect