import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// default json for survey
const tmpSurvey = [
  {
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
  },

  {
    id: "2",
    image_url: "image2",
    title: "patt2",
    slug: "llll2",
    staus: "true",
    description: "lorem ipsum fjf oeo  oooo",
    created_at: "Next today",
    expired_at: "Next tomorow",
    questions: [
      {
        id: "150",
        type: "text",
        description: "null",
        question: "where are youg oing",
        data: {
          options: [
            {
              uuid: "38 sannd",
            },
          ],
        },
      },
    ],
  },
];

const StateContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  userToken: null,
  setUserToken: () => {},
  survey: tmpSurvey,
});

export const StateContextProvider = ({ children }) => {
  // set the state
  const [currentUser, setCurrentUser] = useState({
    name: "innocent",
    email: "innocent@gmail.com",
  });
  const [userToken, setUserToken] = useState("fff");
  const [survey, setSurveys] = useState(tmpSurvey);
  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        setSurveys,
        survey,
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
export const UseStateContext = () => useContext(StateContext);
