function Register ({onSubmit, handleGoToLogin, error}) {

    return <Form className="register" onSubmit={onSubmit} >
        <H2>Sign-up</H2>
        <Input name="name" placeholder="name"/>
        <Input name="surname" placeholder="surname"/>
        <Input name="username" placeholder="username"/>
        <Input name="password" placeholder="password" type="password"/>
        <Button>Register</Button>
        {error && <P>{error}</P>}
        <A onClick={handleGoToLogin}>Login</A>
    </Form>
}
