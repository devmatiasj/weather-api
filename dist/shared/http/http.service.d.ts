export declare class HttpService {
    private readonly axiosInstance;
    constructor();
    get(url: string): Promise<any>;
    post(url: string, data: any): Promise<any>;
}
