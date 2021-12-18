import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./Learning/Option";
import ChatImage from "../../assets/chatbot.png";
import LinkList from "./Learning/LinkList";
const config = {
  initialMessages: [
    createChatBotMessage("AmWell provides a general symptom assessment, Tell me How can i help you?", {
      widget: "learningOptions",
    }),
  ],
  customComponents: {
    header: () => (
      <div className="react-chatbot-kit-chat-header">
        Conversation with AmWell
      </div>
    ),
    botAvatar: (props) => <img src={ChatImage} className="chatbot-message-avtar" alt="chatbot"/>,
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "Introduction to JS",
                url:
                  "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                id: 1,
              },
              {
                text: "Mozilla JS Guide",
                url:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                id: 2,
              },
              {
                text: "Frontend Masters",
                url: "https://frontendmasters.com",
                id: 3,
              },
            ],
        },
    },
  ],
};

export default config;
