export class Game {
    public id: string;
    public letter: string;
    public available: boolean;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.letter = data.letter;
            this.available = data.available;
        }
    }
}