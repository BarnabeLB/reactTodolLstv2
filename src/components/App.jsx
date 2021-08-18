import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

 
  function addItem(intputText) {                                            // on défini un paramètre d'entrée à la fonction addItem que l'on nomme (inputText)
    setItems(prevItems => {                                                 // on rempli la première du tableau selon une fonction anonyme prenant pour paramètre l'historique des items ajoutés
      return [...prevItems, intputText];                                    // on retourne une liste constituée des éléments de prevItems[] et on y ajoute le paramètre de la fonction addItem (inputText)
    });
    
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem}                                                       // Création d'un attribut JSX afin que la fonction addItem() soit accessible depuis InputArea.jsx
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
