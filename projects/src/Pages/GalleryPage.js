import React, {useEffect, useState} from 'react';
import SinglePhoto from "../components/SinglePhoto";

const GalleryPage = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {

                let result = [];
                for(let i = 0; i < 100; i++)
                {
                    result.push(data[i])
                }

                console.log(data)
                setPhotos(result);
            })
    }, []);

    return (
        <div className="d-flex gap-5 flex-wrap">

            {photos.map(x => <SinglePhoto key = {x.id} photo={x} />)}
        </div>
    );
};

export default GalleryPage;