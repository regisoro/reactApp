import { useState } from "react";



function Myform(){
    //créer un hook "useState", qui gère l'état du composant fonction "Myform"
    const [inputs, setInputs] = useState({});

    // methode pour mettre à jour l'état du composant à partir des saisie

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // nous apportons les mises à jour au hoock du composant courant 
        // on utilise le spread Operator dans la fonction pour garder les inputs precedents et en modifier seulement qu'une partie 
        setInputs(values => ({...values, [name]: value}));
    }

    // methode pour gérer l'envoie des données 
    const handleSubmit = (event) =>{
        // (event.preventDefault : hiniber l'evenement)
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Entrez votre nom:
                <input type="text"
                name = "username"
                value = {inputs.username || ""}
                onChange = {handleChange}
                />
            </label>
            <label>Entrez votre age:
                <input 
                type = "number"
                name = "age"
                value = {inputs.age || ""}
                onChange = {handleChange}
                />
            </label> 
            <input type= "submit" />
        </form>
    );
}

export default Myform;