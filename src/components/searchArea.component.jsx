import React, { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import './searchArea.style.css';
import Search from '@material-ui/icons/Search'
import axios from 'axios';

function SearchArea() {

    const [book, setBook] = useState('');
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState('AIzaSyD8c1OF0NLIqBYKme-jgMn4mO9lKjtqCjQ');

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);

    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey + '&maxResults=40')
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Search by topic or theme" variant="outlined" onChange={handleChange} style={{ width: 280 }} />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginLeft: 10 }} >
                    <Search />
                </Button>
            </form>

            <div className="card-img">
                {result.map(book => (
                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                        <Paper className="ebook-img">
                            <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} alt={book.title} />
                        </Paper>
                    </a>
                ))}
            </div>

        </div>
    )
};

SearchArea.displayName = "SearchArea";

export default SearchArea;