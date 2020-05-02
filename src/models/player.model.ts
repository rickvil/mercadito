export class Player {
    public id: string;
    public name: string;
    public lastName: string;
    public color: string;
    public animal: string;
    public fruit: string;
    public vegetable: string;
    public brand: string;
    public country: string;
    public something: string;

    constructor(data: any) {
        if (data) {
            this.id = data.id || '';
            this.name = data.name || '';
            this.lastName = data.lastName || '';
            this.color = data.color || '';
            this.animal = data.animal || '';
            this.fruit = data.fruit || '';
            this.vegetable = data.vegetable || '';
            this.brand = data.brand || '';
            this.country = data.country || '';
            this.something = data.something || '';
        }
    }
}