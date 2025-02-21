import { Application } from '../../data/application/application.model';

export const FAKE_APPLICATIONS: Application[] = [
  {
    applicationID: 501,
    submitDate: new Date('2025-01-10'),
    aiValidationStatus: 'Approved',
    finalStatus: 'Accepted',
    adminNotes: 'Excellent profile',
  },
  {
    applicationID: 502,
    submitDate: new Date('2025-01-15'),
    aiValidationStatus: 'Pending',
    finalStatus: 'Under Review',
  },
];
