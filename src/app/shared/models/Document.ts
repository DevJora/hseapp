export interface Document{
  type: 'induction' | 'habilitation' | 'formation';
  expiration: Date;
  fileURL: string;
}
