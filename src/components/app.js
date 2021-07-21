import ReactDOM from 'react-dom';
import React from 'react';
import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';

const signer = new Signer();
signer.setProvider(new ProviderWeb());

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.authFunc = this.authFunc.bind(this);
        this.authSigner = this.authSigner.bind(this);
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

    authSigner() {    
            const userData = signer.login()  // calling Waves Signer
            .then(user => {
                console.log(user); //Displaying te result on the console
                /*...Proccesing data */
                this.setState(user);
            }).catch(error => { //Displaying the result on the console
                /*Proccesing erros */
                console.error('login rejected')
            })
    }

    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
                <input className="js-login btn btn-secondary" type="submit" value="AuthSigner" onClick={this.authSigner}/>
                <p>Waves Address who gave authorization with Waves Keeper: <strong>{this.state.address}</strong></p>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
} 