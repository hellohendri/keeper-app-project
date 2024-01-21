import React, { useState } from 'react';
import Note from './Note';
import AddIcon from '@mui/icons-material/Add';
interface NoteItem {
  title: string;
  content: string;
}

const CreateArea = () => {
  const [noteItem, setNoteItem] = useState<NoteItem>({
    title: '',
    content: '',
  });

  const [allNotes, setAllNotes] = useState<NoteItem[]>([]);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setNoteItem((prevNoteItem) => ({
      ...prevNoteItem,
      [name]: value,
    }));
  };

  const addNoteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAllNotes((prevAllNotes) => [...prevAllNotes, { ...noteItem }]);
    setNoteItem(() => ({
      title: '',
      content: '',
    }));
  };

  const deleteNoteHandler = (index: number) => {
    setAllNotes((prevAllNotes) => prevAllNotes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={changeHandler}
          value={noteItem.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={3}
          onChange={changeHandler}
          value={noteItem.content}
        />
        <button onClick={addNoteHandler}>
          <AddIcon />
        </button>
      </form>
      {allNotes.map((item, index) => (
        <Note key={index} title={item.title} content={item.content} onDelete={() => deleteNoteHandler(index)} />
      ))}
    </div>
  );
};

export default CreateArea;
