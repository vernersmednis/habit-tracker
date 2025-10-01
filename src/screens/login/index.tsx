import { Button, Field, Fieldset, Input, Flex, Box, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bgGradient="linear(to-br, blue.50, teal.50)">
      <Box p={8} bg="white" borderRadius="xl" boxShadow="2xl" w="100%" maxW="md">
        <Heading mb={6} textAlign="center" color="blue.600">Login</Heading>
        <form onSubmit={handleSubmit}>
          <Fieldset.Root size="lg" w="100%">
            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input name="email" variant="outline" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input name="password" type="password" variant="outline" />
              </Field.Root>
            </Fieldset.Content>
            <Button mt={6} colorScheme="blue" w="full" size="lg" type="submit" boxShadow="md">
              Login
            </Button>
          </Fieldset.Root>
        </form>
      </Box>
    </Flex>
  )
}

export default Login;
