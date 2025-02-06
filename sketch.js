



largura_tela = 500
altura_tela = 500

var dx = 0.1
  


class ponto{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    
  }
  

  
  getX(){
    return this.x
  }
  
  getY(){
    return this.y
  }
  
}

class axis{
  
  constructor(angle){
    this.angle = angle;
    
  }
  
  
  desenhar(origem){
      stroke(20,150,200)
      let x0 = origem.getX()-largura_tela*cos(this.angle)
      let y0 = origem.getY()-altura_tela*sin(this.angle)
      let xf = 2*origem.getX()-x0
      let yf = 2*origem.getY()-y0
      line(x0,y0,xf,yf)
      stroke(20,150,200)
      fill(20,150,200)

  }
  
  
  grid(interval){
    
    let n = int(largura_tela/interval)
    
    /*for(int i = -1*n; i<n ;i = i+interval){
      line()
    }
    */
  }
  
  
  
}


class sis_coord{
  
    constructor(axis_x,axis_y,origem){
      this.axis_x = axis_x
      this.axis_y = axis_y 
      this.origem = origem
      this.space = dx;
      
    }
  
    
    desenhar(){
      
      stroke(20,150,200)
      axis_x.desenhar(this.origem)
      stroke(20,150,200)
      axis_y.desenhar(this.origem)
      fill(20,150,200)
      
      text("0",this.origem.x-8,this.origem.y+10)
      
    }
  
    plotar_ponto(ponto){
          point(this.origem.getX()+ponto.getX(),this.origem.getY()-ponto.getY())
          stroke(100,20,150)
    
}

}

function plot(sis_coord,funcao,inicio,fim){
  
  for(let i = inicio; i<fim; i = i+dx){
    let pontoi = new ponto(1*i,20*funcao(0.1*i))
    xy.plotar_ponto(pontoi)
  }
  
  
}

var axis_x = new axis(0)
var axis_y = new axis(Math.PI/2)
var origem = new ponto(largura_tela/2,altura_tela/2)
var xy = new sis_coord(axis_x,axis_y,origem)



function setup() {
  
  createCanvas(largura_tela,altura_tela);
  background(0,0,0);
  xy.desenhar()
  //plot(xy,y,-250,250)
  //plot(xy,y2,-250,250)
  plot(xy,y3,-250,250)
  plot(xy,y,-250,250)
  
  
}

function y(x){
  return sin(x)
}

function y2(x){
  return cos(x)
}

function y3(x){
  return 0.01*x*x*x-x*x+x
}

function draw() {
  
  
  
  
  
  
}