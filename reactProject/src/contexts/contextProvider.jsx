import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  userToken: null,
  setUserToken: () => {},
});

// default json for survey
const tmpSurvey = {
  id: "1",
  image_url: "image",
  title: "patt",
  slug: "llll",
  staus: "true",
  description: "lorem ips",
  created_at: "today",
  expired_at: "tomorow",
  questions: [
    {
      id: "15",
      type: "string",
      description: "null",
      question: "where are you from",
      data: {
        options: [
          {
            uuid: "123jjuir",
          },
        ],
      },
    },
  ],
};

export const StateContextProvider = ({ children }) => {
  // set the state
  const [currentUser, setCurrentUser] = useState({
    name: "innocent",
    email: "innocent@gmail.com",
  });
  const [userToken, setUserToken] = useState("rrrr");
  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// prop validation
StateContextProvider.propTypes = {
  children: PropTypes.node,
};
export const UserStateContext = () => useContext(StateContext);
