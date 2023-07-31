export enum EmailVerifyMessages {
  INVALID_EMAIL_FORMAT = "Invalid Email!",
  UNREACHABLE_EMAIL_FORMAT = "Unreachable Email!",
  EMAIL_ALREADY_EXIST = "Email already exist!",
}

export enum TechnicalErrorMessages {
  GENERAL_ERROR = "Something went wrong! Please try again after some time.",
  AUTH_SESSION_NOT_FOUND_ERROR = "Authorization Error!",
  COOL_ERROR = "Yo, Ain't No way that's happenin, ain't no sht Error!",
  NOT_REQUIRED_PARAMS = "Required Parameters not found!",
}

export enum AuthMessage {
  EMPTY_EMAIL_CODE = "Verification Code required!",
  INVALID_VERIFICATION_CODE = "Invalid Verification Code!",
  VALID_VERIFICATION_CODE = "Valid Verification Code!",
  INVALID_CREATE_ACCOUNT_FORMAT = "Cannot create account based on information provided!",
  INVALID_PASSWORD_LOGIN = "Sorry, Password is invalid!",
  INVALID_LOGIN = "INVALID_LOGIN",
}

export enum GeneralMessage {
  SUCCESSFUL_PROCESS = "200 Status Process Successfully Completed.",
}
