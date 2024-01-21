import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

interface NoteProps {
  title: string;
  content: string;
  onDelete: () => void;
}

function Note(props: NoteProps) {
  const { title, content, onDelete } = props;
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <Fab onClick={onDelete} sx={{ ':hover': { backgroundColor: '#ff1744' } }}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
