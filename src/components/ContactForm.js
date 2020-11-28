import React from "react";
import { Button } from "react-bootstrap";
import { TextField, InputLabel, Select, FormControl } from "@material-ui/core";

const contactForm = () => {
  return (
    <form>
      <div className="form-container">
        <div className="textField">
          <TextField
            required
            type="text"
            id="outlined-basic"
            label="Full Name:"
            variant="outlined"
            name="name"
            fullWidth
          />
        </div>
        <div className="textField">
          <TextField
            required
            type="email"
            id="outlined-basic"
            label="Email:"
            variant="outlined"
            name="email"
            fullWidth
          />
        </div>
        <div className="textField">
          <FormControl required variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-age-native-simple">
              Subject:
            </InputLabel>
            <Select
              native
              label="Age"
              inputProps={{
                name: "subject",
                id: "outlined-age-native-simple",
              }}
            >
              <option> </option>
              <option>Web Development</option>
              <option>UX Design</option>
              <option>Video Editing (Coming soon)</option>
              <option>Employers</option>
              <option>Other</option>
            </Select>
          </FormControl>
        </div>
        <div className="textField">
          <TextField
            required
            id="outlined-basic"
            label="Message"
            variant="outlined"
            name="message"
            fullWidth
            multiline
            rows={6}
          />
        </div>
        <Button variant="outline-dark" className="contact-btn" type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default contactForm;
