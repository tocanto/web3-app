import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }

    authFunc() {
        const authData = { data: 'Auth on my site' };
        if(WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth ); //Displaying te result on the console
                /*...Proccesing data */
            }).catch(error => { //Displaying the result on the console
                /*Proccesing erros */
            })
        } else {
            alert('To Auth WavesKeeper should be installed.');
        }
    }

    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
} 