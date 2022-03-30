import React from 'react';
//Module Car et Air

// Composant de fonction commence par une lettre majuscule tjrs
export function Car(){
    return <h2>J'apprends super vite</h2>;
}

// des composants avec des propriétés "props" avec lequel on peut donner des attributs à un compsant
// exporté par defaut
export default function Air(props){
    return <h2>J'ai une voiture {props.couleur} !</h2>
  }


// exporter toutes les proriétées de Car vers l'extérieur


