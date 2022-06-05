class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  isNumeric(s) {
    return !isNaN(s - parseFloat(s));
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else if (this.isNumeric(lowerCaseMessage)) {
      this.actionProvider.handleSecondQuestion();
    } else if (
      lowerCaseMessage.includes("male") ||
      lowerCaseMessage.includes("female")
    ) {
      this.actionProvider.handleLastQuestion();
    } else {
      this.actionProvider.NotFound(message);
    }
  }
}

export default MessageParser;
