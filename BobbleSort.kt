fun bubbleSort(arr: Array<Int>) {
    val n = arr.size
    for (i in 0 until n - 1) {
        for (j in 0 until n - i - 1) {
            if (arr[j] > arr[j + 1]) {
                val temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

fun printArray(arr: Array<Int>) {
    println(arr.joinToString(" "))
}

fun main() {
    val arr = arrayOf(2, 12, 3, 0, 8, 90, 69)
    
    println("Lista original:")
    printArray(arr)

    bubbleSort(arr)

    println("Lista ordenado:")
    printArray(arr)
}
