
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  metric: string;
  image: string;
}
