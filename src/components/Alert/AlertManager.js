import React from "react";
import { useAlertStateContext } from "../../context/AlertContext";

import AlertComponent from "./AlertComponent";

// component that holds all the Alerts
const AlertManager = () => {
  // get the Alert state context to display the alerts created by components
  const { alerts } = useAlertStateContext();

  return (
    <div className="container">
      {alerts.length
        ? alerts.map((a) => (
            <div key={a.id} id={a.id}>
              <AlertComponent
                type={a.type}
                message={a.message}
                title={a.title}
                link={a.link}
                id={a.id}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default AlertManager;
