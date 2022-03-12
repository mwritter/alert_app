import React from "react";
import { Alert, AlertTitle, IconButton, Link, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useAlertDispatchContext } from "../../context/AlertContext";
import * as actions from "../../context/alertActions";

const AlertComponent = ({ id, title, type, message, link }) => {
  // get the Alert dispatcher to trigger actions
  const dispatch = useAlertDispatchContext();
  const attrs = link ? { href: link, title: link } : {};
  return (
    <Link {...attrs}>
      <Alert
        severity={type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => dispatch({ type: actions.DELETE_ALERT, id })}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <Typography variant="caption" display="block" gutterBottom>
          {message}
        </Typography>
      </Alert>
    </Link>
  );
};

export default AlertComponent;
