function bubbleSort(arr: number[]): void {
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function printArray(arr: number[]): void {
    console.log(arr.join(" "));
}

// Exemplo de uso
let arr: number[] = [2, 12, 3, 0, 8, 90, 69];

console.log("Lista original:");
printArray(arr);

bubbleSort(arr);

console.log("Lista ordenado:");
printArray(arr);
