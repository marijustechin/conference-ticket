module.exports = class UserDto {
  fullName;
  email;
  githubName;
  qrCode;

  constructor(model) {
    this.fullName = model.fullName;
    this.email = model.email;
    this.githubName = model.githubName;
    this.qrCode = model.qrCode;
  }
};
