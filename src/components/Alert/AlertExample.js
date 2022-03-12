// Simple example component using the Alert context with useAlert hook
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "../../hooks/useAlert";

const AlertExample = () => {
  const [alertTitle, setTitle] = useState("");
  const [alertType, setType] = useState("success");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  // hook into Alert context in this component
  const makeAlert = useAlert();
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <Card style={{ padding: "3rem", minWidth: "500px" }}>
        <CardContent style={{ display: "grid", gap: "1rem" }}>
          <FormControl fullWidth>
            <InputLabel id="type-l">Type</InputLabel>
            <Select
              labelId="type-l"
              id="type"
              value={alertType}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"success"}>Succes</MenuItem>
              <MenuItem value={"warning"}>Warning</MenuItem>
              <MenuItem value={"info"}>Info</MenuItem>
              <MenuItem value={"error"}>Error</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={alertTitle}
            id="title"
            label="Title"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            value={text}
            id="message"
            label="Message"
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            value={link}
            id="outlined-basic"
            label="Link"
            variant="outlined"
            onChange={(e) => setLink(e.target.value)}
          />
          <TextField
            title="Enter time limit in seconds"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={timeLimit}
            id="timeLimit"
            label="Time Limit in seconds"
            variant="outlined"
            onChange={(e) => setTimeLimit(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              makeAlert({ timeLimit, text, link, alertType, alertTitle });
              setText("");
              setTitle("");
              setLink("");
              setTimeLimit("");
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default AlertExample;
