import { useContext } from "react";
import { tagsContext } from "../App";
import Tag from "./Tag";


// async function processLogoImage(path) {
//     let module = await import(path);
//     let logoUrl = module.default;

//     return logoUrl
// }

function Offer({offerObject}) {
    const {id, logo, company, new: isNew, featured: isFeatured, position, role, level, postedAt, contract, location, languages, tools} = offerObject;

    const {tags, setTags} = useContext(tagsContext)

    // add tag to filter bar
    function onSkillTagClick(skill) {
        if (!tags.includes(skill)) {
            setTags([...tags, skill])
        }
    }

    return (
        <article className="job-offer" data-featured={isFeatured}>
            <div className="job-offer__content">
                {/* logo */}
                <img className="job-offer__recruiter-photo" src={logo} alt="" />

                <div className="job-offer__main">
                    <div className="job-offer__descriptions">
                        {/* company, new, featured */}
                        <p className="job-offer__recruiter">
                            {company}
                            {isNew && <Tag accent={true}/>}
                            {isFeatured && <Tag accent={false}/>}

                        </p>
                        
                        {/* position */}
                        <a href="#" className="job-offer__position">
                            {position}
                        </a>

                        <footer>
                            <ul className="job-offer__additional" aria-label="additional information about job offer">
                                {/* postedAt, contact, location */}
                                <li>{postedAt}</li>
                                <li>{contract}</li>
                                <li>{location}</li>
                            </ul>
                        </footer>
                    </div>

                    <ul className="job-offer__filters" aria-label="job tags">
                        <li> 
                            <button className="button tag" onClick={() => onSkillTagClick(role)}> {role} </button>
                        </li>
                        <li> 
                            <button className="button tag" onClick={() => onSkillTagClick(level)}> {level} </button>
                        </li>

                        {/* Skills, tools */}
                        {
                            [...languages, ...tools].map(skill => {
                                return (
                                    <li key={skill} onClick={() => onSkillTagClick(skill)}> 
                                        <button className="button tag"> {skill} </button> 
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Offer;