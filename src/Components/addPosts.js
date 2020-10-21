import React from 'react';

const Post = (props) => {

    const handleSubmit = () => { 

        // new post
      fetch(`${APIURL}/post/new-post`, {
        method: 'post',
        body: JSON.stringify({
                post: {
                     media: image,
                     date: date,
                     description: description,
                }
        }),
        headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
      })
     
    }).then((res) => res.json())
        .then((data) => {
                setImage(data);
                setDate(data);
                setDescription(data);
        })
    }

    return (
        <div>

        </div>
    )
}