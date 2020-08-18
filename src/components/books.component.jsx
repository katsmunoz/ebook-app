import React from 'react';
import SearchArea from './searchArea.component';
import FetchBooks from './fetchBooks.component';
import axios from 'axios';
import NoResults from './noResults.component';
import { Grid, Container } from '@material-ui/core';

const Books = () => {

    const [book, setBook] = React.useState('');
    const [result, setResult] = React.useState([]);
    const [apiKey, setApiKey] = React.useState('AIzaSyD8c1OF0NLIqBYKme-jgMn4mO9lKjtqCjQ');

    const handleChange = (e) => {
        e.preventDefault();
        const book_ = e.target.value;
        setBook(book_);
        getData();
    }
        

        const getData = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${ book }&key=${ apiKey }&maxResults=40`)
            .then(data => {
                setResult(data.data.items);
                console.log(data.data.items);
            })
            .catch(err => {
                alert('Oops! No results found.');
                window.location.reload(true)
              
                
            })
    }



    return (
        <div>
            <SearchArea book={ book } setBook = { setBook } handleChange={ handleChange } />

            { !result ? (
                 <NoResults />
            ) : (
                <Container>
                <Grid container justify="center" spacing={1}>
                    <FetchBooks result={ result } />
                </Grid>
                </Container>
            )

            }
           
        </div>
    )
}


Books.displayName = "Books";

export default Books;