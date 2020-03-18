import math

a = int(input())
b = int(input())
a1 = math.ceil(math.sqrt(a + 0.0))
b1 = math.sqrt(float(b))
while a1 <= b1:
    print(a1 * a1)
    a1 += 1
