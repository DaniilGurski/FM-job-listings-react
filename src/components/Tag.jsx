import { useEffect, useRef } from "react";


function Tag({accent}) {
    const tag = useRef(null);

    useEffect(() => {
        tag.current.classList.toggle("job-tag--accent", accent);
    }, [tag])


    return <span className="job-tag" ref={tag}>{accent ? "NEW!": "FEATURED"}</span>
}

export default Tag;