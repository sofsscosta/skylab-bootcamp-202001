function Login({onSubmit, handleGoToRegister, error}) {

    return (
    <Form className='login' onSubmit={onSubmit}>
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