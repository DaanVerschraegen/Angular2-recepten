export class Recepten {

   constructor (public naam: string, public calorien: string, public tijdInMin: number) {}

   toForm(): string {
      return `naam=${this.naam}&calorien=${this.calorien}&tijdInMin=${this.tijdInMin}`;
   }
}
