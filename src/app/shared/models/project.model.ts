import { Details } from './details.model';
export interface Project{
  id: string;
  title: string;
  img: string;
  url: string;
  tags: string[];
  year: string;
  details?: Details;
}
