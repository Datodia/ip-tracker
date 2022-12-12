export interface Data {
    ip: string;
    isp: string;
    location: {
        city: string;
        country: string;
        geonameId: number;
        lat: number;
        lng: number;
        postalCode: string | number;
        region: string;
        timezone: string;
    }
}