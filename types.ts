
export enum ServiceCategory {
  COMBO = 'COMBO PACKAGE',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  VIDEOGRAPHY = 'VIDEOGRAPHY',
  MEDIA_COVERAGE = 'MEDIA COVERAGE',
  FULL_RECORD = 'FULL RECORD'
}

export interface PackageFeature {
  text: string;
}

export interface PackageDetails {
  id: number;
  name: string;
  features: string[];
  price: string;
  isPopular?: boolean;
  image: string;
}

export interface ServiceType {
  category: ServiceCategory;
  note?: string;
  packages: PackageDetails[];
}
