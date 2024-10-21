def BobbleSort(lista):
    tamanho = len(lista)
    for i in range(tamanho):
        for j in range(0, tamanho-i-1):
            if lista[j] > lista[j+1] :
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista
lista = [2,12,3,0,8,90,69]
lista_ordenada = BobbleSort(lista)
print ("lista_ordenada:'", lista_ordenada)