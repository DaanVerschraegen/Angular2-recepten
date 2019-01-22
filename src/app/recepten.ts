export class Recepten {

   constructor (public naam: string, public caloriën: string, public tijdInMin: number) {}

   toForm(): string {
      return `naam=${this.naam}&caloriën=${this.caloriën}&tijdInMin=${this.tijdInMin}`;
   }
}
