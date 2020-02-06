function Search({title, onSubmit, error}){

    return <Form className="search" onSubmit={onSubmit} >
        <H2>{title}</H2>
        {error && <P>{error}</P>}
        <Input name="query" placeholder="criteria" />
        <Button>Search</Button>
    </Form>
}
