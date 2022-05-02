export class User {
    id: string;
    name: string;
}
export class Bucket {
    url: string;
    name: string;
    assets: BucketAsset[];
    users: User[];
}
export class BucketCategory {
    id: string;
    name: string;
    icon: string;
}
export class BucketAsset {
    id: string;
    name: string;
    url: string;
    categories: BucketCategory[];
    maintainers: User[];
}
export class BucketTrack {
    id: string;
    name: string;
    updates: BucketUpdate[];
}
export class BucketUpdate {
    id: string;
    name: string;
    url: string;
    categories: string[];
    tracks: string[];
}
