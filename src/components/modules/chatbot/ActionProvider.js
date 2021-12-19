class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleFirstQuestion = (txt) => {
      const message = this.createChatBotMessage(
        txt==="My Self" ? "Tell me your age:" : "Tell me his/her age:",
      );
  
      this.updateChatbotState(message);
    };

    handleSecondQuestion = () => {
      const message = this.createChatBotMessage(
        "Tell me your gender?"
      );
  
      this.updateChatbotState(message);
    }
    

    NotFound = (txt) => {
      const message = this.createChatBotMessage(
        "I'm sorry, I have no information on about "+txt
      );
  
      this.updateChatbotState(message);
    }

    handleLastQuestion = () => {
      const message = this.createChatBotMessage(
        "Thanks for connecting!!"
      );
  
      this.updateChatbotState(message);
    }


    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
export default ActionProvider;