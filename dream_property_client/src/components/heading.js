export default function Heading({ title, description }) {
    return(
        <>
            <div className="heading">
                <h1> {title} </h1>
                <h1> {description} </h1>
                <hr className="hr-style"/>
            </div>
        </>
    )
}