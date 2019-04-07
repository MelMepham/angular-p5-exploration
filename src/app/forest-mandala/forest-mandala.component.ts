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
  // mandala objects
  let petal = p.windowWidth / 16;

  // colors
  let green100 = p.color('#ebffeb');
  let green400 = p.color('#00b02c');

  let oceanGreen400 = p.color('#00dfb2');
  let oceanBlue200 = p.color('#a6e5ff');
  let oceanBlue400 = p.color('#009fe1');

    window.onresize = function() {
      canvasSize = p.windowWidth / 1.5;
      p.resizeCanvas(canvasSize, canvasSize);
      petal = p.windowWidth / 16;
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

      //circle framing the flower of life
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(oceanBlue200);
      p.ellipse(0, 0, petal * 2, petal * 2)
      p.pop();

      //triange WIP
      p.push();
      p.translate(p.center.x, p.center.y);
      p.triangle(-66, 66, -66, -33, 0, 66)
      p.pop()

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
