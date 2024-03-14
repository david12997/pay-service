export type paylink = {
    id?: number;
    status: 'draft' | string;
    owner: number | null;
    created_on: Date | null;
    paylink_user: number;
    data_paylink: string | null;
    type: string | null;
    media: string | null;
    color: string | null;
    url: string | null;
    privacity: string | null;
    password: string | null;
    views: number | null;
    finished_pays: number | null;
  };