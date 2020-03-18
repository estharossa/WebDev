def xor(x, y):
    if (x == 0 and y == 1) or (x == 1 and y == 0):
        return 1
    if (x == 1 and y == 1) or (x == 0 and y == 0):
        return 0


a = int(input())
b = int(input())
print(xor(a, b))
