export interface IProfile {
  id?: string;
  username?: string;
  tagline?: string;
  likesCount?: number;
  reachCount?: number;
  picture?: string;
  links?: string[];
  dob?: Date;
  user_doc_id?: string;
  theme: string;
  communication_emails: boolean;
  marketing_emails: boolean;
  social_emails: boolean;
  security_emails: boolean;
}
