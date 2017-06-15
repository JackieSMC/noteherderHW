import React, { Component } from 'react'

import './NoteForm.css'


class NoteForm extends Component {
    render() {
        return (
        <div className="NoteForm">
            <form>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title your note" 
                        value={this.props.getTitle} 
                        onChange={this.props.titleChange} />
                </p>
                <p>
                    <textarea 
                        name="body" 
                        cols="30" 
                        rows="10" 
                        placeholder="Just start typing..."
                        onChange={this.props.messageChange}></textarea>
                </p>
            </form>
        </div>
        )
    }
}

export default NoteForm
