import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// default json for survey
const tmpSurvey = [
  {
    id: "1",
    image_url:
      "https://img.freepik.com/free-photo/young-adult-enjoying-yoga-nature_23-2149573175.jpg?w=900&t=st=1700231011~exp=1700231611~hmac=e368c68f7f73aa7c0db4bf06ef2973cfb2edcac69d2cecbfb348819dabdbf2cc",
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
    image_url:
      "https://img.freepik.com/free-photo/hand-button-man-multimedia-mail_1150-1730.jpg?w=900&t=st=1700230823~exp=1700231423~hmac=8263843548f5d8b6247ca1c7aa113034bac3817b4b6a52afb01a82a01b9ef85d",
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
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(
    localStorage.getItem("TOKEN") || ""
  );
  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
    _setUserToken(token);
  };

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
