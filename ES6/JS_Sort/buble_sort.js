function ArrayList() {
    var array = [];
    this.insert = function (val) {
        isArr = Array.isArray(val);
        console.log('isArr....  '+isArr);
        
        if (isArr){
            array = [...val];
        }else{
            array.push(val);
        }
       
    }

    this.toString = () => {
        return array.join();
    }

    const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    this.bubleSort = function () {
        let tempArr = [...array];
        let length = tempArr.length;
        for (let i = 0; i < length; i++) {
            console.log(tempArr);
            for (let j = 0; j < length - 1; j++) {
                if (tempArr[j] > tempArr[j + 1]) {
                    swap(tempArr, j, j + 1);
                }
                console.log("-- "+tempArr);
            }
        }
        return tempArr.join();
    }

    this.selectionSort = function(){
        let temArr = [...array];
        let length = temArr.length;
        let minIndex = 0;
        for (let i = 0; i < length-1;i++){
            minIndex = i;
            for(let j=i;j<length;j++){
                if (temArr[j] < temArr[minIndex]){
                    minIndex = j;
                }
            }
            if (i !== minIndex){
                swap(temArr, minIndex,i)
            }
            console.log(temArr);
        }
    }
}

let bArr = new ArrayList();
//bArr.insert(5);
bArr.insert([5,3,2,1,4]);

console.log(bArr.toString());
// console.log(bArr.bubleSort());
// bArr.insert(1);
console.log(bArr.selectionSort());
console.log(bArr.toString());