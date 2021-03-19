class LRU {
    constructor(n) {
        this.len = 0;
        this.cacheArr = new Array(n);
    }

    handleInput(newItem) {
        for (let i = 0; i < this.len; i++) {
            if (newItem === this.cacheArr[i]) {
                this.handleJumpHead(i)
                return;
            }
        }
        if (this.len <= this.cacheArr) {
            this.cacheArr[this.len] = newItem;
            this.len += 1;
            return;
        }
        this.handleShiftAndPush(newItem)
    }

    handleJumpHead(posi) {
        const temp = this.cacheArr[posi];
        for (let i = posi; i - 1 > 0; i--) {
            this.cacheArr[i] = this.cacheArr[i - 1]
        }
    }

    handleShiftAndPush(newItem) {
        this.cacheArr.shift()
        this.cacheArr.push(newItem)
    }

    getCache() {
        return this.cacheArr
    }

}

const cacheArr = new LRU(5)

cacheArr.handleInput(1)
cacheArr.handleInput(2)
cacheArr.handleInput(3)
cacheArr.handleInput(1)
cacheArr.handleInput(4)
cacheArr.handleInput(5)
cacheArr.handleInput(6)

const rs = cacheArr.getCache()

console.log(rs);