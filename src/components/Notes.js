import React from 'react'

export const Notes = (props) => (
    <ul className="list-group">
        {props.notes.map(note => {
            return (
                <li
                    className="list-group-item note"
                    key={note.id}
                >
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => props.onRemove(note.id)}>×
                    </button>
                    </li>
                )
            }
        )}

    </ul>
);