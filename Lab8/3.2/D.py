import math

x = int(input())
for i in range(0, x):
    if math.pow(2,i) == x:
        print("YES")
        exit()
print("NO")