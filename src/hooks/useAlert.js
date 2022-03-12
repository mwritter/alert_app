// used to create unique ids for these alerts
import { v4 as uuidv4 } from "uuid";
import { useAlertDispatchContext } from "../context/AlertContext";
import * as actions from "../context/alertActions";

// hook to easly implement showing alerts in any component
export const useAlert = () => {
  const dispatch = useAlertDispatchContext();

  const alert = ({
    timeLimit,
    text,
    link,
    alertType,
    id = uuidv4(),
    alertTitle,
  }) => {
    // convert time to seconds default to 10s if nothing is passed in
    timeLimit = timeLimit ? timeLimit * 1000 : 10000;

    // dispatch an action to add Alert
    dispatch({
      type: actions.ADD_ALERT,
      alert: {
        id,
        link,
        message: text,
        type: alertType,
        title: alertTitle,
      },
    });

    // dispatch an action to delete Alert once the time limit is reached
    setTimeout(() => {
      dispatch({
        type: actions.DELETE_ALERT,
        id,
      });
    }, timeLimit);
  };
  return alert;
};
