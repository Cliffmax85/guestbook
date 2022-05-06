import { useState } from 'react';
import { createEntry } from '../services/entries';
import { useUser } from '../context/UserContext';

export default function EntryForm({ addEntry }) {
    const { user } = useUser();
    const [content, setContent] = useState('');

    const entryInput = async (e) => {
        e.preventDefault();
        const entry = await createEntry({ userId: user.id, content });
        addEntry(entry);
        setContent('');
    };

    return (
        <>
         <div>
             <form onSubmit={entryInput}>
                 <textarea
                   name='content'
                   value={content}
                   onChange={(e) => setContent(e.target.value)}
                />
                <button type='submit'>Add to the book, Yo!</button>
             </form>
         </div>
        </>
    )
}

