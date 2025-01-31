import React, { useEffect, useState } from "react";
import "./notes.css";
import Sidebar from "../NotesSidebar/sidebar";
import NotesBody from "../NotesBody/notesBody";
import API from "../../utils/API";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [userNewNote, setUserNewNote] = useState({})
    const [activeNote, setActiveNote] = useState(false);
    const [activeNoteData, setActiveNoteData] = useState({
        title:"",
        body:""
    })

    useEffect(() => {
        loadNotes()
    }, []);

    function loadNotes() {
        API.getNotes()
            .then(res => setNotes(res.data))
            .catch(error => console.log(error));
    };

    const onAddNote = () => {
        if(userNewNote.id){
            API.updateOneNoteById(userNewNote.id, {title:userNewNote.title, body:userNewNote.body})
            .then(res => console.log(res), loadNotes())
        }else{
            API.addNote(userNewNote)
            .then(res => console.log(res.data), loadNotes())
            .catch(error => console.log("on add note", error));    
        }
        
    };

    const onDeleteNote = (noteId) => {
        console.log(noteId);
        API.deleteNote(noteId)
            .then(res => loadNotes())
            .catch(error => console.log(error));
    };

    const onUpdateNote = (updatedNote) => {
        console.log(updatedNote);
        setUserNewNote(updatedNote)
    };

    const getActiveNote = (id) => {
        API.getOneNoteById(id)
        .then(res => setActiveNoteData(res.data))
    };
    

    return (
        <div className="grid-x grid-padding-x grid-margin-y">
            <div className="cell small-12 medium-4 large-4"> 
                <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                    getActiveNote={getActiveNote}
                />
            </div>
            <div id="NoteBox" className="cell small-12 medium-8 large-8">
                <NotesBody 
                onUpdateNote={onUpdateNote} 
                activeNoteData={activeNoteData}/>
            </div>
        </div>
    )
}

export default Notes;