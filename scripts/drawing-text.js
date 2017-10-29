class DrawingText extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fontWeight = 600;
        this.fontSize = 35;
        this.fontStyle = "Arial";
        this.textX = [];
        this.textY = [];
    }
    
    onMouseDown(coord,event){
        this.contextReal.font = `${this.fontWeight} ${this.fontSize}px ${this.fontStyle}`;
        this.textX.push(coord[0]);
        this.textY.push(coord[1]);
        this.fontStartY = this.textY[0] - this.fontSize;
        console.log('inside if (x,y) '+this.textX[0]+','+this.textY[0]);
        console.log('fontStartY '+this.fontStartY);
        $('#textInput').css({"display":"inline-block","top":this.fontStartY,"left":this.textX[0]});
        
        if ((this.textX.length > 1) && (event.target.id != $('#textInput'))){
            this.outputText(this.contextReal);
        }
        
    }

    outputText(ctx){
        console.log('inside outputText function (x,y) '+this.textX[0]+' , '+this.textY[0]);
        let inputText = $('#textInput').val();
        console.log('input is '+ inputText);
        contextReal.fillText(inputText,this.textX[0],this.textY[0]);
        contextReal.stroke();
        $('#textInput').css({"display":"none","top":"0","left":"0"});
        $('body').find('input[type=text],input').val('');
        this.textX= [];
        this.textY = [];
        console.log('after clearing arrays '+this.textX+' , '+this.textY);
    }


        
}