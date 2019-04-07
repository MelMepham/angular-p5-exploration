import { Component, OnInit } from '@angular/core';
import * as sketch from 'p5';

@Component({
  selector: 'app-forest-mandala',
  templateUrl: './forest-mandala.component.html',
  styleUrls: ['./forest-mandala.component.scss']
})
export class ForestMandalaComponent implements OnInit {

  private sketch;

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
    console.log('analog-destroy');
  }

  private createCanvas = () => {
    console.log('creating canvas');
    this.sketch = new sketch(this.mandala);
  }

  private destroyCanvas = () => {
    console.log('destroying canvas');
    this.sketch.noCanvas();
  }

  public mandala = function (p: any) {

    var canvasSize;
    let green100 = p.color('#ebffeb');
    let green400 = p.color('#00b02c');

    p.setup = () => {
      canvasSize = p.windowHeight;
      p.createCanvas(canvasSize, canvasSize).parent('forest-mandala');
      p.angleMode(p.DEGREES);
      p.background(green100);
    };
    p.center = { x: 0, y: 0 };

    p.draw = () => {
      p.center.x = p.width / 2;
      p.center.y = p.height / 2;

      p.push();
      p.translate(p.center.x, p.center.y);
      p.stroke(green400);
      p.fill(green400);
      p.curve(100, 0, 0, 0, 0, 100, 100, 100);
      p.curve(-100, 0, 0, 0, 0, 100, -100, 100);
      p.pop();
    };
  };
}
