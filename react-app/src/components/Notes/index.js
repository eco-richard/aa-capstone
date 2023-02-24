import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllNotes } from '../../store/notes';

import SideBar from '../SideBar';
import NewNote from "./NewNote";
import NoteSideBar from './NoteSideBar';
import NoteBody from './NoteBody';


function Notes() {
  const dispatch = useDispatch();
  const location = useLocation();

  const notes = useSelector(state => state.note);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch])

  if (Object.values(notes.allNotes).length === 0) return null;

  return (
    <>
    <SideBar />
    <NoteSideBar notes={Object.values(notes.allNotes)}/>
    {location.pathname === '/new-note' ? (
      <NewNote />
    ) : (
      <NoteBody note={notes.singleNote}/>
    )}
    </>
  )
}

export default Notes;