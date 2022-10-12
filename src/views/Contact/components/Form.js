const Form = ({user, handleChange, handleSubmit, sucess, error}) =>{
    const disabled = !(user.firstName && user.lastName && user.email && user.message)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Nombre:</label>
                <input value={user.firstName}  onChange={handleChange} name="firstName" type="text" placeholder="Juan"/><br/>
                <label htmlFor="lastName">Apellido:</label>
                <input value={user.lastName} onChange={handleChange} name="lastName" type="text" placeholder="Perez"/><br/>
                <label htmlFor="email">Email:</label>
                <input value={user.email} onChange={handleChange} name="email" type="email" placeholder="jperez@mail.com"/><br/>
                <label htmlFor="message">Message:</label>
                <textarea  value={user.message} onChange={handleChange} name="message" placeholder="Deja tu mensaje..."/><br/>
                <input disabled={disabled} type="submit"/>
            </form>
            {sucess && <p>Mensaje enviado correctamente!</p>}
            {error && <p>Ocurrio un error al intentar enviar el mensaje!</p>}

        </div>
    )
}

export default Form;