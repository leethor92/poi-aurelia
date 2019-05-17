export class App {
  pointName: string;
  pointDetails: string;
  points: any[] = [];

  addPoint() {
    const point = {
      pointName: this.pointName,
      pointDetails: this.pointDetails,
    };
    this.points.push(point);
    console.log(point);
  }
}
