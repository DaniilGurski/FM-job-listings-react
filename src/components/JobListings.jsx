import Offer from "./Offer";

function JobListings({ data }) {
    return (
        <ul className="job-listings">
            {
                data.map((offer) => {
                    return (
                        <li key={offer.id}> 
                            <Offer offerObject={offer} /> 
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default JobListings;