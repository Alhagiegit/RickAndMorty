
    export interface Info {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface Origin {
        name: string;
        url: string;
    }

    export interface Location {
        name: string;
        url: string;
    }

    export interface Character{
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

    export interface RootObject {
        info: Info;
        results: Character[];
    }

    // export interface Info {
    //     count: number;
    //     pages: number;
    //     next: string;
    //     prev?: any;
    // }

    // export interface Location {
    //     id: number;
    //     name: string;
    //     type: string;
    //     dimension: string;
    //     residents: string[];
    //     url: string;
    //     created: Date;
    // }

    // export interface RootObject {
    //     info: Info;
    //     results: Location[];
    // }
