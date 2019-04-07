import { Component, OnInit } from '@angular/core';
import * as sketch from 'p5';

@Component({
  selector: 'app-forest-mandala',
  templateUrl: './forest-mandala.component.html',
  styleUrls: ['./forest-mandala.component.scss']
})
export class ForestMandalaComponent implements OnInit {

  private _sketch;

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private createCanvas = () => {
    this._sketch = new sketch(this.mandala);
  }

  private destroyCanvas = () => {
    this._sketch.noCanvas();
  }

  public mandala = function (p: any) {
  // mandala objects
  let petal = p.windowWidth / 16;
  let Atriangex1 = p.windowWidth / 33;
  let Atriangley1 = p.windowWidth / 18;
  let Atriangley2 = p.windowWidth / 9;

  // colors
  let green100 = p.color('#ebffeb');
  let green200 = p.color('#b9ffa6');

  let oceanGreen400 = p.color('#00dfb2');
  let oceanBlue200 = p.color('#a6e5ff');
  let oceanBlue400 = p.color('#009fe1');

  let hotPink200 = p.color('#ffa6e5');

    window.onresize = function() {
      canvasSize = p.windowWidth / 1.5;
      p.resizeCanvas(canvasSize, canvasSize);
      petal = p.windowWidth / 16;
      Atriangex1 = p.windowWidth / 33;
      Atriangley1 = p.windowWidth / 18;
      Atriangley2 = p.windowWidth / 9;

    }

    // setup
    let canvasSize;
    p.setup = () => {
      canvasSize = p.windowWidth / 1.5;
      p.createCanvas(canvasSize, canvasSize).parent('forest-mandala');
      p.angleMode(p.DEGREES);
      p.background(green100);
    };
    p.center = { x: 0, y: 0 };

    //lets actually draw something now.
    p.draw = () => {
      p.background(green100);

      p.center.x = p.width / 2;
      p.center.y = p.height / 2;

      //triange WIP
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(green200);
      for (let i=0; i<6; i++) {
        p.triangle(Atriangex1, -Atriangley1, -Atriangex1, -Atriangley1, 0, -Atriangley2)
        p.rotate(60);

      };
      p.pop()

      //circle framing the flower of life
      p.push();
      p.translate(p.center.x, p.center.y);
      p.stroke(oceanBlue200);
      p.fill(oceanBlue200);
      p.ellipse(0, 0, petal * 2 , petal * 2)
      p.pop();

      //flower of life
      p.push();
      p.translate(p.center.x, p.center.y);
      p.stroke(oceanGreen400);
      p.fill(oceanGreen400);
      p.rotate(30);
      for (let i=0; i<6; i++) {
        p.curve(petal, 0, 0, 0, 0, petal, petal, petal);
        p.curve(-petal, 0, 0, 0, 0, petal, -petal, petal);
        p.rotate(60);
      };
      p.pop();

    };
  };
}
