import React from 'react';

const SinglePhoto = ({photo}) => {
    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s' alt=""/>
            <p>{photo.title}</p>
        </div>
    );
};

export default SinglePhoto;