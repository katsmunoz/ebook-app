import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './searchArea.style.css';
import Search from '@material-ui/icons/Search'


function SearchArea({ book, setBook, handleChange }) {

    return (
        <div>
            <form onSubmit = { handleChange }>
                <TextField id="outlined-basic" type="text" label="Search by topic or theme" variant="outlined" onChange={ e => setBook(e.target.value)} style={{ width: 280 }} />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginLeft: 10 }} >
                    <Search />
                </Button>
            </form>

            {/* <div className="card-img">
                {result.map(book => (
                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                        <Paper className="ebook-img">
                            <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} alt={book.title} />
                        </Paper>
                    </a>
                ))}
            </div> */}

        </div>
    )
};

SearchArea.displayName = "SearchArea";

export default SearchArea;