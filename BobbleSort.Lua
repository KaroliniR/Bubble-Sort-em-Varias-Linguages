function bubbleSort(arr)
    local n = #arr
    for i = 1, n - 1 do
        for j = 1, n - i do
            if arr[j] > arr[j + 1] then
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
            end
        end
    end
end

function printArray(arr)
    for i = 1, #arr do
        io.write(arr[i] .. " ")
    end
    io.write("\n")
end

local arr = {2, 12, 3, 0, 8, 90, 69}

print("Lista original:")
printArray(arr)

bubbleSort(arr)

print("Lista ordenado:")
printArray(arr)
