

export default function room({ name, description, id }) {
    const collapseId = "collapse" + id;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + collapseId} aria-controls={collapseId}>
                    {name}
                </button>
            </h2>
            <div id={collapseId} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"> {description} </div>
            </div>
        </div>
    )
}