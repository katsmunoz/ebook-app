import React, { Fragment } from 'react';
import { Grid, Box, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './fetchBooks.style.css';

const FetchBooks = ({ result }) => {

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[5],
          fontSize: 15,
        },
      }))(Tooltip);

    return (
        <Fragment>

            {
                result.map((book, index) => (
                    <Grid sm={3} md={2} item key={index}>
                        <LightTooltip title={book.volumeInfo.title} arrow placement="top">
                        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                            <Box className="ebook-img" style={{ textAlign: "center", marginBottom: 20, backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})` }} >
                            </Box>
                        </a>          
                        </LightTooltip>
                    </Grid>
                ))
            }
        </Fragment>

    )
}

FetchBooks.displayName = 'FetchBooks'

export default FetchBooks;