function Update({onSubmit}) {

  return (
  <Form className="update" onSubmit={onSubmit} >
    <H2>Update</H2>
    <Input name="name" placeholder="New Name" />
    <Input name="surname" placeholder="New Surname" />
    <Input name="username" placeholder="New Username" />
    <Button>Save Changes</Button>
  </Form>
  )
}