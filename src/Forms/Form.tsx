import { useState } from "react"
import { Input } from "./Components/Input"
import { Select } from "./Components/Select"

import formJson from './formJson.json'
import { AddFriendForm } from "../db/AddFriendForm"

export const Form = () => {
    console.log(formJson)
    const fields = formJson[0]

    const [formFields, setFormFields] = useState(fields)

    console.log(formFields)

    function handleChange() {
        setFormFields(fields)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }

    console.log(fields)
    return (
        <div style={{ width: '100vw' }}>
            <h1> {fields.form_title} </h1>
            <AddFriendForm defaultAge={2}/>

            <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '400px' }}>
                {
                    fields &&
                    fields.fields.map((field, index) => (
                        <Input
                            placeholder={field.placeholder}
                            name={field.name}
                            value={field.value}
                            required={field.required === 'true'}
                            readOnly={field.readonly === 'true'}
                            key={index}
                            onChange={handleChange}
                        />
                    ))
                }
                <button type="submit"> Submit </button>
            </form>
            {
                String(JSON.stringify(formFields))
            }
        </div>
    )
}