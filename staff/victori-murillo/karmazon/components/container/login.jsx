function Login({onSubmit, handleGoToRegister, error, message}) {

    return (
    <Form className='login' onSubmit={onSubmit}>
        {message && <P color={"green"}>{message}</P>} 
        <H2>Sign-in</H2>
        <Input name="username" placeholder="username" /> 
        <Input name="password" placeholder="password" type="password" /> 
        <Button>Login</Button>
        {error && <P>{error}</P>} 
        <A onClick={handleGoToRegister}
        >Register</A>
    </Form>
    )
}