import {useState} from 'react';

function Form() {
    const [form, setForm] = useState({name: "", email: ""}); //save form using useState
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent "Form submitted" disappear in short time.
        console.log("Form submitted");
        console.log(form)
    };

    const onChange = (event) => {
        console.log("Changed input field")
        const name = event.target.name;
        const value = event.target.value;

        console.log(`event.target.name: ${name}, event.target.value: ${value}`);

        setForm({ ...form, [name]: value }); // ...form is for passing previous form value
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "name" onChange = {onChange} placeholder="Name (e.g. John)" />
            <input type = "email" name = "email" onChange = {onChange} placeholder="Email (e.g. john.doe@example.coom" />
            <button type = "submit">Submit Form</button>
        </form>
    );
}

export default Form;