export class Recepten {

   constructor (public naam: string, public calori�n: string, public tijdInMin: number) {}

   toForm(): string {
      return `naam=${this.naam}&calori�n=${this.calori�n}&tijdInMin=${this.tijdInMin}`;
   }
}
