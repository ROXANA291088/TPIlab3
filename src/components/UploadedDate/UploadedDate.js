const UploadedDate = ({uploadedDate}) => {
    const year = uploadedDate.getFullYear();
    const month = uploadedDate.toLocaleString("es-AR", {month: "long"});
    const day = uploadedDate.toLocaleString("es-AR", {day: "2-digit"});
  
    return (
        <div>
            {day} {month} {year}
        </div>
    )
}

export default UploadedDate