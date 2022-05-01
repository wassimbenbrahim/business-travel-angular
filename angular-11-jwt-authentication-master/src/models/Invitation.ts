export class Invitation {
  idInvit?: number;
  titreInvit?: string;
  descInvit?: string;
  emailEmpl?: string;
  dateCreated?: Date;
  lastUpdated?: Date;
  // tslint:disable-next-line:ban-types
  status?: Boolean;
  // tslint:disable-next-line:ban-types
  emailSent?: Boolean;
}
