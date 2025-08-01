interface Agent {
  id: string;
  firstname: string;
  lastname: string;
  company: string;
  businessSector: string;
  zoneExecution: string;
  departement: string;
  poste: 'execution' | 'encadrement';
  inductionDate: Date;
  habilitation: string;
  penalty: string[];
  documents: [];
  createdBy: string;
  createdAt: Date;
}
