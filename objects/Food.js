var Food = /** @class */ (function () {
    function Food() {
    }
    Food.prototype.isColliding = function (positionX, positionY) {
        if (positionX == this.randomNumberX && positionY == this.randomNumberY) {
            this.generateRandomFoodPosition();
            return true;
        }
        else {
            return false;
        }
    };
    Food.prototype.generateFood = function () {
        this.context.fillStyle = "#ff5252";
        this.context.fillRect(this.randomNumberX, this.randomNumberY, this.boxSize, this.boxSize);
    };
    Food.prototype.generateRandomFoodPosition = function () {
        this.randomNumberX = Math.floor(Math.random() * this.canvasWidth);
        var restOfDivisionX = this.randomNumberX % this.boxSize;
        if (restOfDivisionX != 0) {
            this.randomNumberX -= restOfDivisionX;
        }
        this.randomNumberY = Math.floor(Math.random() * this.canvasHeight);
        var restOfDivisionY = this.randomNumberY % this.boxSize;
        if (restOfDivisionY != 0) {
            this.randomNumberY -= restOfDivisionY;
        }
    };
    return Food;
}());
var food = new Food();
