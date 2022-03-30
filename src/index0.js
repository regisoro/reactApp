import React from 'react';
import ReactDOM from 'react-dom';
import Myform from './form';
// j'importe Air en default et Car dans ce fichier pour les utiliser
import Air, {Car} from './Car';

const myFirstElement = <h1>Coucou React</h1>;

// ReactDOM.render(myFirstElement, document.getElementById("root"));

// composant de class contient la methode render
//commence par une lettre majuscule tjrs
class Cars extends React.Component {
  // si le composant a un constructor, la "props" doit etre passée dans la methode super()
  constructor(props){
    // Super() heritage de React.Component
    super(props);

    // c'est dans state que sont stockées les propriétés d'un composant
    this.state = {color: "rouge"};
  }
  // methode setState() pour mettre à jour la propriété color de l'état "state" dans le constructor
  changeColor = () => {
    return this.setState({color: "bleue"})
  }
  render(){
    // quand on veut ecrire plusieurs lignes de code, faudrait mettre une parenthèse et une div ou un fragment après le "return"
    return (
      <div>
        <h1>Je suis un bon dev {this.props.langue} </h1>
        <p>J'ai une voiture {this.state.color}</p>
        <button type='button' onClick={this.changeColor}>Changer la couleur</button>
      </div>
    );
  }
}

// ReactDOM.render(<Cars langue="javascript"/>, document.getElementById('root'));





// Mettre des composants dans autre, sans oublier de mettre dans fragment<></>
// jai appelé le composant Car dans le composant Garage
function Garage(){
  return (
    <>
      <p>Hier je suis allé au garage, parce que </p>
    <Air couleur="Jaune"/>
    </>
  );
}


// code pour afficher un message avant de demonter un composant

class Demonter extends React.Component{
  constructor (props){
    super(props);
    this.state = {show: true};
  }
  desact = () => {
    return this.setState({show: false});
  }

  render(){
    let header;
    if(this.state.show){
      header = <Afficher />
    }

    return (
      <div>
        {header}

        <button type='button' onClick={this.desact}>Desactiver</button>
      </div>
    );
  }
}

class Afficher extends React.Component{
  //methode de definition d'action avant le demontage d'un composant
  componentWillUnmount(){
    alert('vous aller desactiver l\'affichage');
  }
  render(){
    return(
      <h2>Hello tout le monde</h2>
    );
  }
}

// ReactDOM.render(<Demonter />, document.getElementById("root"));

function Voi(props){
  return <li>Je suis une {props.brand}</li>
}

function Garages(){
  const cars = [{id: 1, brand: 'BMW'}, 
                {id: 2, brand: 'Merco'}, 
                {id:3, brand:'Suzuki'}
            ];
  return(
    <>
      <h3>Au garage</h3>
      {/* la method map(function(valeur, index, tableau){ return valeur + index }) : ceci est une explication du fonctionnement de map */}
      <ul>
        {cars.map((car) => <Voi key ={car.id} brand={car.brand} /> )}
      </ul>
    </>
  );
}

// ReactDOM.render(<Garages />, document.getElementById('root'));
// ReactDOM.render(<Myform />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

