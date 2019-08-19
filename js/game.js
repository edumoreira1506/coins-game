var Game = function(dificulty){

    this.field = (char) => {
        switch(char){
            case '*': return '<div class="block red"></div>'
            case '/': return '<div class="block blue"></div>'
            default: return '<div class="block white"></div>'
        }
    }

    this.makeBoard = function(){
        this.board = []

        for(let i = 0; i < 10; i++){
            this.board[i] = []

            for(let j = 0; j < 10; j++)
                this.board[i].push('/')
        }

        for(let i = 0; i < this.dificulty; i++){
            this.board[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = '*'
        }
    }

    this.drawBoard = () => {
        let html = ''
        
        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j < this.board[i].length; j++){
                html += this.field(this.board[i][j])
            }

            html += '</br>'
        }

        $('#game').append(html)
        $('.player').addClass('in')
    }

    this.move = (direction) => {
        let x = $('.player').css("left").replace('px','')
        let y = $('.player').css("bottom").replace('px','')

        let playerPosition = this.getPosition($('.player')[0])
        this.checkDefeat(playerPosition)

        if(direction == 38){
            //UP
            y++;
        }else if(direction == 40){
            //DOWN
            y--;
        }else if(direction == 39){
            //RIGHT
            x++;
        }else if(direction == 37){
            //LEFT
            x--;
        }

        $('.player').css("left", `${x}px`)
        $('.player').css("bottom", `${y}px`)
    }

    this.checkDefeat = (playerPosition) => {
        let lavas = $('.red')

        for(let i = 0; i < lavas.length; i++){
            if((this.getPosition(lavas[i]).x - playerPosition.x < 25 &&
            this.getPosition(lavas[i]).x - playerPosition.x > -25) &&
            (this.getPosition(lavas[i]).y - playerPosition.y < 25 &&
            this.getPosition(lavas[i]).y - playerPosition.y > -25)){
                this.start(true)
            }
        }
    }

    this.getPosition = (element) => {
        for (var lx=0, ly=0;
                element != null;
                lx += element.offsetLeft, ly += element.offsetTop, element = element.offsetParent);
        return {x: lx,y: ly};
    }

    this.cleanBoard = () => {
        let htmlBoard = '<div class="player out"></div>' 
        $('#game').html(htmlBoard)
    }

    this.setInitialPositionPlayer = () => {
        $('.player').css("left", `413px`)
        $('.player').css("bottom", `100px`)
    }

    this.start = (lose = false) => {
        if(lose) alert('You loose!')
        this.cleanBoard()
        this.setInitialPositionPlayer()
        this.makeBoard()
        this.drawBoard()
    }

    this.board
    this.dificulty = dificulty
} 