import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ReactQuillProps {
  description: string,
  setDescription: string
}

export default function TextEditor({description, setDescription}: ReactQuillProps) {

  return <ReactQuill theme="snow" value={description} onChange={() => {setDescription}} />;
}