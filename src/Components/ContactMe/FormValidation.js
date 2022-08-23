function Validation(values) {
    let errors ={}

    if(!values.name.trim()){
        errors.name = "Name is reqiure"
    }
    if(!values.email.trim()){
        errors.email ="Email is reqiure"
    }
    else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(values.email))
    {
        errors.email = "Email is not valid."
    }
    if(!values.request.trim()){
        errors.request = "Message is reqiure"
    }
    return errors;
}

export default Validation;