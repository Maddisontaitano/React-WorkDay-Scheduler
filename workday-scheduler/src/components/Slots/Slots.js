import React, { useState, useEffect } from "react";


function Slots(){

    const [notes, setNotes] = useState([]);
   // const [noteEditing, setNoteEditing] = useState("");
    
    const addNote = (e) => {
        e.preventDefault();
        const newNote = {
          id: Math.random().toString(36).substr(2, 9),
          text: e.target.item.value,
        };
        setNotes([...notes, newNote]);
        e.target.item.value = "";
      };

    return(
<body>
       
    <label for="9am">9 Am:</label><br></br>
        <div class="row" id= "9">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
          <br></br>

    <label for="10am"id = "hour-10">10 Am:</label><br></br>
        <div class="row" id= "10">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="11am">11 Am:</label><br></br>
        <div class="row" id="11">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="12pm">12 Pm:</label><br></br>
        <div class="row" id= "12">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="1pm">1 Pm:</label><br></br>
        <div class="row" id= "13">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="2pm">2 Pm:</label><br></br>
        <div class="row" id= "14">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="3pm">3 Pm:</label><br></br>
        <div class="row" id= "15">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="4pm">4 Pm:</label><br></br>
        <div class="row" id= "15">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

    <label for="5pm">5 Pm:</label><br></br>
        <div class="row" id= "17">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

          <label for="6pm">6 Pm:</label><br></br>
        <div class="row" id= "18">
        <form onSubmit={addNote}>
        <input type="text" name="item" />
        <input type="Submit" />
        {notes.map((note) => <div key={note.id}>{note.text}</div> )}
        </form>
        </div>
        <br></br>

        <ol id="schedule"></ol> 

    </body>
    )
}

export default Slots;