import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import './fetchBooks.style.css';

const FetchBooks = ({ result }) => {

    return (
        <Fragment>

            {
                result.map((book, index) => (
                    <Grid sm={3} md={2} item key={index}>
                        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                            <Box className="ebook-img" style={{ textAlign: "center" }} style={{ backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})` }} >
                            </Box>
                        </a>
                    </Grid>
                ))
            }
        </Fragment>

    )
}

FetchBooks.displayName = 'FetchBooks'

export default FetchBooks;