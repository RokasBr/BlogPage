import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>

            <div className="d-flex gap-4 p-2 border">
                <Link to="/public">Posts</Link>
                {/*<Link to="/posts">Posts</Link>*/}
                <Link to="/gallery">Gallery</Link>
            </div>

        </div>
    );
};

export default Toolbar;