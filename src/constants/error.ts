import { COMMAND, REQUIRED_ENVIRONMENT_VARIABLES } from ".";

const ERROR = {
  DIVISION_BY_ZERO: "Unable to perform calculation. Cannot divide by 0.",
  INVALID_COMMAND: (command: string) =>
    `Command '${command}' is invalid. Valid options include '${COMMAND.ADD}', '${COMMAND.SUBTRACT}', '${COMMAND.MULTIPLY}' and '${COMMAND.DIVIDE}'.`,
  INVALID_REQUEST_SIGNATURE:
    "'x-slack-signature' and 'x-slack-request-timestamp' headers were not found or were invalid.",
  INVALID_TEXT: (text: string) =>
    `Input '${text}' is not valid. Expected input to be of the form: 'firstNumber secondNumber'.`,
  REQUIRED_ENVIRONMENT_VARIABLES_NOT_SET: `The following environment variables are required: ${REQUIRED_ENVIRONMENT_VARIABLES.map(
    variable => `'${variable}'`
  ).join(", ")}`
};

export { ERROR };
