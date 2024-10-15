s1 = input()

lst = list(s1)
lstO = lst.copy()
lst.reverse()

print(lst == lstO)