const express = require('express')
const router = express.Router()
const { validateNote } = require('../utils/validators')

/* ------------------------ TODO-4 - Create New Note ------------------------ */
router.post('/', (req, res) => {
  console.log(`[POST] http://localhost:${global.port}/note - Storing a new note`)

  /*
  	TODO-4:
  		Given node content
  		Create a new node and store the node to the database,
  		Return the newly created note object

  		Note content is stored in variable newText

  		Your return object should be something similar to this:
      	{ id, text, dateCreated, lastModified }
  */
  const newText = req.body.text

  module.exports = (req, res, next) =>{
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    const userId= decoded.user._id
    try{
        if(req.body.userId && req.body.userId !== userId){
            throw 'invalid user ID';}}else{
            req.jwtPayload = decoded // add payload here to req
            next();
    }

}catch{
    res.status(401).json({ error : 'not authenticated !'});
}


exports.createNote = (req, res, next) =>{
    const { jwtPayload } = req
    // do stuff with jwtPayload
    let note = new Note(req.body);
    note.user = req.user;note.save((err) =>{
SELECT id, text, dateCreated, lastModified FROM notes
    if(err){
        res.status(401);
        return next(err)
    }
    return res.status(201).json('note created successfully!')
})



    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    if (!validateNote(newNote)) {
      res.status(500).send('Invalid data type')
    }
	  res.status(201).send({ newNote })
    // --- end of succ flow ---



    // Upon fail, run the following lines to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to insert')
    // --- end of fail flow ---




  // TODO-4.1: Remove this section once you start working on TODO-4
  // --- Remove section begins ---
  const newNote = { id: 2, text: newText, dateCreated: new Date().toISOString().split('T')[0], lastModified: new Date().toISOString().split('T')[0] }
  if (!validateNote(newNote)) {
    res.status(500).send('Invalid data type')
  }
  res.status(201).send({ newNote })
  // --- Remove section ends ---
})
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO-5 - Update A Note ------------------------- */
router.put('/', (req, res) => {
  console.log(`[PUT] http://localhost:${global.port}/note - Updating note`)

  /*
		TODO-5:
			Given note id and content
			Update the note's content with the given id in the database
			Return the updated note object

			Note id is stored in variable noteId
			Note content is stored in variable newText

			Your return object should be something similar to this:
        { id, text, dateCreated, lastModified }
	*/
	const noteId = req.body.id
	const newText = req.body.text

  import React, { useState } from "react";
  // import Header from "./Header";
  // import Footer from "./Footer";
  import Note from "./Note";
  import CreateArea from "./CreateArea";

  function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
    function editNote(id, text, dateCreated, lastModified){
      const tobeUpdated = notes.find(singleNote => singleNote.id === id)
      tobeUpdated.id = id
      tobeUpdated.text = text;
      tobeUpdated.dateCreated = dateCreated;
  tobeUpdated.lastModified = lastModified;
      setNotes([...notes])


    }
    function deleteNote(id) {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem) => {
          return noteItem.id !== id;
        });
      });
    }
    console.log(notes);
    return (



        {notes.map((noteItem) => {
          return (
                        key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          );
        })}


    );
  }

  export default App;




  import React, { useState } from "react";
  // //import AddIcon from "@material-ui/icons/Add";
  // import Fab from "@material-ui/core/Fab";
  // import Zoom from "@material-ui/core/Zoom";

  function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
      id: "",
      title: "",
      content: ""
    });

    function handleChange(event) {
      const { name, value } = event.target;

      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    }

    function submitNote(event) {
      event.preventDefault();
      setNote({
        id: Math.floor(Math.random() * 100),
        title: "",
        content: ""
      });
      props.onAdd(note);
    }

    function expand() {
      setExpanded(true);
    }

    return (



          {isExpanded && (
                        name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )}

                    name="content"
            onClick={expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
          Submit



    );
  }

  export default CreateArea;



  import React, { useState } from "react";
  //import DeleteIcon from "@material-ui/icons/Delete";
  import "./styles.css";

  function Note(props) {
    const [displayForm, setForm] = useState(false);
    function handleClick() {
      props.onDelete(props.id);
    }
    function handleEdit(e) {
      e.preventDefault();
      const title = e.target.children[0].value;
      const content = e.target.children[1].value;
      props.onEdit(props.id, title, content);

      setForm(false)
    }

    return (


  {props.title}


  {props.content}


                onSubmit={handleEdit}
          className={`${displayForm ? "show" : "hide"}`}
        >




        X
         setForm(!displayForm)}>Edit

    );
  }

  export default Note;



  .App {
    font-family: sans-serif;
    text-align: center;
  }
  .show{
    display: block;
  }
  .hide{
    display: none;
  }




    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    if (!validateNote(updatedNote)) {
      res.status(500).send('Invalid data type')
    }
	  res.send({ updatedNote })
    // --- end of succ flow ---



    // Upon fail, run the following lines to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to update')
    // --- end of fail flow ---




		// TODO-5.1: Remove this section once you start working on TODO-5
  	// --- Remove section begins ---
  	const updatedNote = { id: noteId, text: newText, dateCreated: '2021-04-15', lastModified: new Date().toISOString().split('T')[0]}
		if (!validateNote(updatedNote)) {
      res.status(500).send('Invalid data type')
    }
  	res.send({ updatedNote })
  	// --- Remove section ends ---
})
/* -------------------------------------------------------------------------- */

/* ------------------------- TODO-6 - Delete A Note ------------------------- */
router.delete('/', (req, res) => {
  console.log(`[DELETE] http://localhost:${global.port}/note - Deleting note`)

  /*
	  TODO-6:
      Given a note id
		  Delete note with the given id from the database

		  Note id is stored in variable noteId
	*/
	const noteId = req.body.id

  db.notes.remove({ note: note }, function(err, results) {
    console.log(results);
    next();
});
db.notes.update({ "notes.note": note },
                { $pull: { notes: { note: note } } },
                function(err, results) {

    console.log(results);
    next();
});



    // Upon succ, run the following lines to validate the response object and respond to client

    // --- begin of succ flow ---
    res.send()
    // --- end of succ flow ---



    // Upon fail, run the following lines to respond with an error

    // --- begin of fail flow ---
    res.status(500).send('Fail to delete')
    // --- end of fail flow ---





  // TODO-6.1: Remove this section once you start working on TODO-6
  // --- Remove section begins ---
  res.send()
  // --- Remove section ends ---
})
/* -------------------------------------------------------------------------- */

module.exports = router
