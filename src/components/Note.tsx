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
      <button onClick={onDelete}>DELETE</button>
    </div>
  );
}

export default Note;
