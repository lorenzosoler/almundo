export class Hotel {
    id: string;
    name: string;
    stars: number;
    price: number;
    image: string;
    amenities: string[];

    constructor (hotel: any) {
        this.id = hotel.id;
        this.name = hotel.name;
        this.stars = hotel.stars;
        this.price = hotel.price;
        this.image = hotel.image;
        this.amenities = hotel.amenities;
    }
}