export interface MultilingualText {
  de?: string;
  en?: string;
  it?: string;
  es?: string;
}

export interface PageBuilderItem {
  _type: string;
  [key: string]: unknown;
}

export interface PageData {
  _id: string;
  _type: string;
  title: MultilingualText;
  metaDescription?: MultilingualText;
  pageBuilder?: PageBuilderItem[];
  publishedAt?: string;
}
