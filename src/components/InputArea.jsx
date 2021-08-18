import React, {useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");                                      // création d'un état sous la forme d'un array destructuré. InputText est le nom de variable de l'array, setInputText est le nom de la fonction permettant de modifié la valeur de la variable en case 0.

  function handleChange(event) {                                                       // quand le champ de saisie est utilisé la fonction est appelée avec un paramètre qui est l'évènement déclencheur ( ici du texte saisi)
    const newValue = event.target.value;                                               // la valeur de l'évènement ( la string) est stockée 
    setInputText(newValue);                                                            // elle est envoyé dans la première case du tableau inputText[]
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />                   {/*quand le champ est saisie, la fonction handleChange() est appellée */ }
      
      <button onClick={                                                                 // Quand on click sur le bouton "add"
        () => {props.onAdd(inputText)                                                   // on appelle une fonction retournant la fonction liée à la props onAdd de App.jsx, dont le paramètre est la valeur du champs saisi
          setInputText("");}}>                                                          {/*la fonction retourne aussi une réinitialisation du champs de saisi */}
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
