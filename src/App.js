import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import GiftCard from './GiftCard'

class App extends React.Component{

  constructor(props){
    super(props);

  this.state = {
    gifs: []
  }
}


Result = (event) => {
  event.preventDefault();
   let userInput = event.target[0].value;
  //let giphyAPI = 'http://api.giphy.com/v1/gifs/random?api_key=8t9JPpCGl0eClAaiwnfR50sSTyRqAl2o';

  axios.get('http://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key=8t9JPpCGl0eClAaiwnfR50sSTyRqAl2o')
 .then( (resolve) => {
   this.setState( {gifs:resolve.data.data} );
   console.log(resolve.data.data);
 })
  // fetch(giphyAPI, {'mode': 'no-cors'})
  // .then(response => response.json())
  //
  // .then(data => {
  //   this.setState({
  //     gifs: data
  //   })
  // })
  .catch( (err)=> console.log(err));
}

render(){
  let elems = [];

  for( let i=0; i<this.state.gifs.length; ++i) {
    elems.push(<GiftCard image={this.state.gifs[i].images.preview_gif.url}/>);
  }
   // elems = this.state.gifs.map(("editor-cat-SRO0ZwmImic0", i) => <GiftCard key={i} gif= {"editor-cat-SRO0ZwmImic0"} />)

return(
  <div>
  <form onSubmit= {this.Result} >
  <h1> GIF API</h1>
    <input type="text" />
    </form>
    {elems}
    </div>


);

}


}

export default App;

// searchGif = (event) => {
//   event.preventDefault();
//   let userInput = event.target[0].value;
//
//   fetch('http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY')
//   .then(response=>{
//     return response.json();
//     })
//     .then(json =>{
//       console.log(json)
//                     console.log(json.data[0].images.original.url);
//                 })
//
//                 .catch(err => console.log(err));
//
// }
