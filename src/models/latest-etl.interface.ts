import Company from './company.interface';
export default interface LatestEtl {
  id: number;
  company: Company;
  status: string;
  dateTimeRequested: string;
}
