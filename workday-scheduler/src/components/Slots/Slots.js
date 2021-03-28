import React, { useState, } from "react";
import './Slots.css'

// function to save the note to local storage
function Slots(){

    const [notes, setNotes] = useState([]);
    
    const addNote = (e) => {
        e.preventDefault();
        const newNote = {
          id: Math.random().toString(36).substr(2, 9),
          text: e.target.item.value,
        };
        setNotes([...notes, newNote]);
        e.target.item.value = "";
      };


// my list of hour inputs
    return(
<body>
       
    <label for="9am" class="label">9 Am:</label><br></br>
        <div class="row" id= "9">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        
    {/* this is the list of renders to-dos */}

        <div class="result">
              <p3> To-Dos will render here!</p3>
        {notes.map((item) => <div key={item.id}>{item.text}</div> )}
        </div>
        </form>
        </div>
          <br></br>

    <label for="10am" class="label">10 Am:</label><br></br>
        <div class="row" id= "10">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
       {notes.map((note) => <div key={note.id}>{note.text}</div> )} 
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="11am" class="label">11 Am:</label><br></br>
        <div class="row" id="11">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="12pm" class="label">12 Pm:</label><br></br>
        <div class="row" id= "12">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="1pm" class="label">1 Pm:</label><br></br>
        <div class="row" id= "13">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="2pm" class="label">2 Pm:</label><br></br>
        <div class="row" id= "14">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit"/>
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="3pm" class="label">3 Pm:</label><br></br>
        <div class="row" id= "15">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="4pm" class="label">4 Pm:</label><br></br>
        <div class="row" id= "15">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

    <label for="5pm" class="label">5 Pm:</label><br></br>
        <div class="row" id= "17">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit" />
        {/* <div class="result">
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </div> */}
        </form>
        </div>
        <br></br>

          <label for="6pm" class="label">6 Pm:</label><br></br>
        <div class="row" id= "18">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" class="submit"/>
        {/* <div class="result">
       {notes.map((note) => <div key={note.id}>{note.text}</div> )} 
        </div> */}
        </form>
        </div>
        <br></br>


    </body>
    )
}

export default Slots;