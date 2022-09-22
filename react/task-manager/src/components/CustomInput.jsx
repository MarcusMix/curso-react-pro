const customInput = ({label, value}) => {
   return (
    <div className="custom-iput-container">
        <input type="text" className="custom-imput" />

        {label ? (
            <label 
                className={
                    `${value.length !== "" ? "shrink" : ""
                        } custom-input-label`}
            ></label>
        ) : null}
   </div> 
   )
}

export default customInput;