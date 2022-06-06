import React from 'react'

const Alert = (props) => {

  const capitalize = (word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(newWord)
    return newWord;
  }

  return (
    <>
      <div style={{ height: "45px" }}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)} ! </strong>{props.alert.message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
      </div>
    </>
  )
}

export default Alert;