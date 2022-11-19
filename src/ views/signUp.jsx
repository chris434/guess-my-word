import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export function SignUp() {
  return (
    <div>
      <h2 className="mb-3 text-center">create a guess my word account</h2>
      <div className="d-flex justify-content-center">
        <div className="bg-light p-3 w-5 col col-md-6 justify-content-center rounded">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label for="email">email</Form.Label>
              <Form.Control id="email" placeholder="emil" />
              <Form.Text className="text-danger">emil is required</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="username">username</Form.Label>
              <Form.Control id="username" placeholder="user name" />
              <Form.Text className="text-danger">emil is username</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="password">password</Form.Label>
              <Form.Control id="password" placeholder="password" />
              <Form.Text className="text-danger">
                password is required
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button type="submit">sign up</Button>
            </div>
          </Form>
          <div className="mt-3">
            <small>already have a account?</small>
            <Link to="/login"> login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
