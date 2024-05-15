class Square {
    constructor(x, y, path = []) {
        this.x = x;
        this.y = y;
        this.path = path;
    }
}

class Graph {
    constructor() {
        this.moves = [
            [2, 1], [1, 2], [-1, 2], [-2, 1], 
            [-2,-1], [-1, -2], [1, -2], [2, -1]
        ]; //possible moves for a knight
    }

    //returns true if move stays within 0-7 in x & y coord
    isValidMove(x, y) {
        return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    }

    knightMoves(startSq, endSq) {
        const [startX, startY] = startSq;
        const [endX, endY] = endSq;
        const queue = [new Square(startX, startY, [[startX, startY]])];
        const visited = new Set(); //prevents infinite loop

        this.printStart(startSq,endSq);

        while (queue.length > 0) {
            const current = queue.shift();
            const { x, y, path } = current;

            if (x === endX && y === endY) {
                return this.printResults(path);
            }

            for (let move of this.moves) {
                const [dx, dy] = move;
                const newX = x + dx;
                const newY = y + dy;

                if(this.isValidMove(newX, newY) && !visited.has(`${newX},${newY}`)) {
                    visited.add(`${newX},${newY}`); //records this move as visited
                    queue.push(new Square(newX, newY, path.concat([[newX, newY]])));
                }
            }
        }

        return null; // If no path found
    }

    printResults(path) {
        console.log(`You made it in ${path.length} moves! Here's your path:`);
        for (let move of path) {
            console.log(`[${move.toString()}]`);
        };
    };

    printStart(startSq, endSq) {
        console.log(`Start square: [${startSq}]`)
        console.log(`End square: [${endSq}]`)
        console.log(`---`)
    }

}



const graph = new Graph();
graph.knightMoves([0,0],[7,7]);



