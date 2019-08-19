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

    this.board
    this.dificulty = dificulty
    this.makeBoard()
} 