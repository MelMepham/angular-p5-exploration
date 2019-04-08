import { Component, OnInit, OnDestroy } from '@angular/core';
import { ForestMandalaColor } from '../../assets/styles/styles.enum';
import * as sketch from 'p5';
import { from } from 'rxjs';

@Component({
  selector: 'app-forest-mandala',
  templateUrl: './forest-mandala.component.html',
  styleUrls: ['./forest-mandala.component.scss']
})
export class ForestMandalaComponent implements OnInit, OnDestroy {

  private _sketch;
  private _c = ForestMandalaColor;

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private createCanvas = () => {
    this._sketch = new sketch(this.mandala.bind(this));
  }

  private destroyCanvas = () => {
    this._sketch.noCanvas();
  }

  public mandala = function (p: any) {

    let lastPrint = 0;
    let i = 0;

  // mandala objects
  let petal;
  let Atriangex1, Atriangley1, Atriangley2, Btriangley1;
  let AcircleSize, AcircleX;
  let BcircleX, BcircleSize;

    // setup vars
    let canvasSize;

  function calculateSizes() {
    petal = p.windowWidth / 16;
    Atriangex1 = p.windowWidth / 33;
    Atriangley1 = p.windowWidth / 18;
    Atriangley2 = p.windowWidth / 9;
    Btriangley1 = p.windowWidth / 11;
    AcircleSize = p.windowWidth / 63;
    AcircleX = BcircleX = petal;
    BcircleSize = AcircleSize * 6;
  }

    window.onresize = function() {
      canvasSize = p.windowWidth / 1.5;
      p.resizeCanvas(canvasSize, canvasSize);
      calculateSizes();

    };

    // setup
    p.setup = () => {
      canvasSize = p.windowWidth / 1.5;
      p.createCanvas(canvasSize, canvasSize).parent('forest-mandala');
      p.angleMode(p.DEGREES);
      p.background(this._c.green100);
      calculateSizes();

      lastPrint = p.second() - 3;


    };
    p.center = { x: 0, y: 0 };

    // lets actually draw something now.
    p.draw = () => {
      var timeElapsed = p.second() - lastPrint;

      if (timeElapsed > 3) {
        i++;
        console.log(i);
        lastPrint = p.second();
      }

      p.background(this._c.green100);

      p.center.x = p.width / 2;
      p.center.y = p.height / 2;

      // Bcircles
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(this._c.oceanBlue300);
      p.rotate(p.radians(p.sin(p.frameCount/ 240) * -300));
      for (let i = 0; i < 6; i++) {
        p.ellipse(-BcircleX, 0, BcircleSize, BcircleSize);
        p.rotate(60);
      }
      p.pop();

      // Atriange
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(this._c.green200);
      for (let i = 0; i < 6; i++) {
        p.triangle(Atriangex1, -Atriangley1, -Atriangex1, -Atriangley1, 0, -Atriangley2)
        p.rotate(60);
      }
      p.pop();

      // Btriange
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(this._c.oceanBlue400);
      for (let i = 0; i < 6; i++) {
        p.triangle(Atriangex1, -Atriangley1, -Atriangex1, -Atriangley1, 0, -Btriangley1)
        p.rotate(60);
      }
      p.pop();

      // Acircles
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(this._c.hotPink200);
      for (let i = 0; i < 6; i++) {
        p.ellipse(-AcircleX, 0, AcircleSize, AcircleSize)
        p.rotate(60);
      }
      p.pop();

      // circle framing the flower of life
      p.push();
      p.translate(p.center.x, p.center.y);
      p.stroke(this._c.oceanBlue200);
      p.fill(this._c.oceanBlue200);
      p.ellipse(0, 0, petal * 2 , petal * 2)
      p.pop();

      // flower of life
      p.push();
      p.translate(p.center.x, p.center.y);
      p.strokeWeight(0.1);
      p.stroke(this._c.oceanGreen400);
      p.scale((p.sin(p.frameCount / 3) * 1.3) + .5);
      p.rotate(p.radians(p.frameCount / 4) * -50);
      flashColorChange(this._c.oceanBlue400, this._c.oceanGreen400, 5000)
      for (let i = 0; i < 6; i++) {
        p.curve(petal, 0, 0, 0, 0, petal, petal, petal);
        p.curve(-petal, 0, 0, 0, 0, petal, -petal, petal);
        p.rotate(60);
      }
      p.pop();

    };

    function flashColorChange(colorA, colorB, time) {
        p.fill( p.lerpColor(p.color(colorA), p.color(colorB), (p.sin((p.millis() % time) /10.0)) * 1.3) )
    }
  };
}
